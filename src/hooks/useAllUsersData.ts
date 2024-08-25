import { useAuthContext } from "@/context/AuthContext";
import { User } from "firebase/auth";
import { collection, query, where, orderBy, limit, startAfter, getDocs, updateDoc, QueryDocumentSnapshot, DocumentData, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UserData } from "../types/users";
import { db } from "@/firebase/config";

type UseAllUsersReturnType = {
  user: User | null;
  allUsersData: UserData[] | null;
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
  handleSearchChange: (searchTerm: string) => void;
  updateUserBalance: (userId: string, newBalance: number) => Promise<void>;
};

const ITEMS_PER_PAGE = 10;

const useAllUsersData = (): UseAllUsersReturnType => {
  const { user } = useAuthContext();
  const [allUsersData, setAllUsersData] = useState<UserData[] | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastVisibleDoc, setLastVisibleDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  useEffect(() => {
    if (!user) {
      return;
    }
    fetchUsers(currentPage);
  }, [user, currentPage, searchTerm]);

  const fetchUsers = async (page: number) => {
    const usersCollectionRef = collection(db, "users");
    let q;

    if (searchTerm) {
      q = query(
        usersCollectionRef,
        where("login", ">=", searchTerm),
        where("login", "<=", searchTerm + "\uf8ff"),
        orderBy("login"),
        limit(ITEMS_PER_PAGE)
      );
    } else {
      q = query(
        usersCollectionRef,
        orderBy("login"),
        limit(ITEMS_PER_PAGE)
      );

      if (page > 1 && lastVisibleDoc) {
        q = query(
          usersCollectionRef,
          orderBy("login"),
          startAfter(lastVisibleDoc),
          limit(ITEMS_PER_PAGE)
        );
      }
    }

    const querySnapshot = await getDocs(q);
    const usersData = querySnapshot.docs.map((doc) => doc.data() as UserData);
    setAllUsersData(usersData);

    if (querySnapshot.docs.length > 0) {
      setLastVisibleDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    }

    const totalDocsQuery = await getDocs(collection(db, "users"));
    setTotalPages(Math.ceil(totalDocsQuery.size / ITEMS_PER_PAGE));
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
    setLastVisibleDoc(null);
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
    if (page === 1) {
      setLastVisibleDoc(null);
    }
  };

  const updateUserBalance = async (userLogin: string, newBalance: number) => {
    const usersCollectionRef = collection(db, "users");
    const q = query(usersCollectionRef, where("login", "==", userLogin));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`Користувача з логіном ${userLogin} не знайдено`);
    }

    const userDoc = querySnapshot.docs[0].ref;
    await updateDoc(userDoc, { balance: newBalance });
    fetchUsers(currentPage);
  };

  return {
    user,
    allUsersData,
    totalPages,
    currentPage,
    setPage,
    handleSearchChange,
    updateUserBalance,
  };
};

export default useAllUsersData;

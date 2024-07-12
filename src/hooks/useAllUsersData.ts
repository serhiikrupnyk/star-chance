import { useAuthContext } from "@/context/AuthContext";
import { User } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UserData } from "../types/users";
import { db } from "@/firebase/config";

type UseAllUsersReturnType = {
  user: User | null;
  allUsersData: UserData[] | null;
};

const useAllUsersData = (): UseAllUsersReturnType => {
  const { user } = useAuthContext();

  const [allUsersData, setAllUsersData] = useState<UserData[] | null>(null);

  useEffect(() => {
    if (!user) {
      return;
    }

    const usersCollectionRef = collection(db, "users");
    
    const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
      const usersData: UserData[] = snapshot.docs.map((doc) => doc.data() as UserData);
      setAllUsersData(usersData);
    });

    return unsubscribe;
  }, [user]);

  return {
    user,
    allUsersData,
  };
};

export default useAllUsersData;

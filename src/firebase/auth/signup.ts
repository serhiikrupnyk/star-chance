import { setUser } from "@/utils/user";
import { UserData } from "../../types/users";
import firebase_app from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

// Get the authentication instance using the Firebase app
const auth = getAuth(firebase_app);

// Function to sign up a user with email and password
export default async function signUp(
  login: string,
  firstName: string,
  lastName: string,
  email: string,
  birthDate: string | Date,
  phoneNumber: string,
  password: string
) {
  let result = null, // Variable to store the sign-up result
    error = null; // Variable to store any error that occurs

  try {
    result = await createUserWithEmailAndPassword(auth, email, password); // Create a new user with email and password
    await updateProfile(result.user, {
      displayName: firstName + " " + lastName,
    });
    const userData: UserData = {
      permission: 'admin',
      login: login,
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthDate: birthDate,
      phoneNumber: phoneNumber,
      balance: 0,
    };
    await setUser(result.user.uid, userData);
  } catch (e) {
    error = e; // Catch and store any error that occurs during sign-up
  }

  return { result, error }; // Return the sign-up result and error (if any)
}

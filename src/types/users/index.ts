export interface UserData {
  permission: 'user' | 'admin',
  login: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string | Date;
  balance: number;
}

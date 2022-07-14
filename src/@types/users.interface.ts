export interface User {
  _id: string;
  email: string;
  password?: string;
  restaurants: { total: number; list: any[] };
  fname: string;
  lname: string;
  image: string;
  isEmailVerified: { isVerified: boolean; verifivationCode: string };
}

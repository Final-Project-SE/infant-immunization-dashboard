export interface User {
  id: number;
  email: string;
  phone: string;
  password?: string;
  role: string;
  otp: string;
  activeStatus: string;
  createdDate: Date;
}
export interface Admin {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password?: string;
  role: string;
  otp?: string;
  activeStatus: string;
  createdDate?: Date;
}


export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  imageUrl: string;
}
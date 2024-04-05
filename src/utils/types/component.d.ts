export type HealthStation = {
  id: Number;
  name: String;
  type: String;
  region: String;
  city: String;
  subcity: String;
  kebele: String;
  houseNumber: String;
  description?: String;
  createdDate?: Date;
};

export type TreatmentInformation = {
  id: Number;
  user: User;
  healthStation: HealthStation;
  service: String;
  description: String;
};

export type User = {
  id: Number;
  email: String;
  phone: String;
  password?: String;
  role: String;
  otp: String;
  activeStatus: String;
  createdDate: Date;
};

export type Admin = {
  id: Number;
  firstName: string;
  lastName: string;
  email: String;
  phone?: String;
  password?: String;
  role: String;
  otp?: String;
  activeStatus: String;
  createdDate?: Date;
};

export type UserProfile = {
  id: Number;
  firstName: String;
  lastName: String;
  middleName: String;
  sex: Sex;
  imageUrl: String;
  user: User;
};

export type Mother = {
  id: Number;
  bloodType: String;
  birthDate: Date;
  firstName: string;
  lastName: string;
  email: String;
  phone: String;
  password?: String;
  role: String;
  otp: String;
  activeStatus: String;
  createdDate: Date;
};

export type Child = {
  id: Number;
  mother: Mother;
  firstName: String;
  lastName: String;
  middleName: String;
  birthDate: Date;
};

export type Vaccine = {
  id: Number;
  name: String;
  description: String;
  dosage: String;
  ageRange: String;
  dosageType: String;
  duration: String;
  createdDate: Date;
};

export type Certificate = {
  id: Number;
  child: Child;
  name: String;
  issuedDate: Date;
};

export type Appointment = {
  id: Number;
  user: User;
  healthStation: HealthStation;
  appointmentDate: Date;
  createdDate: Date;
  description: String;
  vaccine: Vaccine;
  status: String;
};

export type News = {
  id: Number;
  user: User;
  title: String;
  description: String;
  imageUrl: String;
  createdDate: Date;
};

export type Report = {
  id: Number;
  user: User;
  name: String;
  documentUrl: String;
  createdDate: Date;
};

export type Address = {
  id: Number;
  user: User;
  city: String;
  subcity: String;
  wereda: String;
  kebele: String;
  houseNumber: String;
};

type Sex = "Male" | "Female";

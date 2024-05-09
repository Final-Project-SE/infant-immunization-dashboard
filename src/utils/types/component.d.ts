export type CreateHealthStationDto = {
  name: string;
  type: string;
  region: string;
  city: string;
  subcity: string;
  kebele: string;
  houseNumber: string;
  description?: string;
};

export type HealthStation = {
  id: string;
  name: string;
  type?: string;
  region: string;
  zone: string;
  city: string;
  subcity?: string;
  kebele?: string;
  houseNumber: string;
  description?: string;
  images?: string[];
  createdDate?: Date;
};

export type TreatmentInformation = {
  id: number;
  user: User;
  healthStation: HealthStation;
  service: string;
  description: string;
};

export type User = {
  id: Number;
  email: string;
  phone: string;
  password?: string;
  role: string;
  otp: string;
  activeStatus: string;
  createdDate: Date;
};

export type Admin = {
  id: Number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password?: string;
  role: string;
  otp?: string;
  activeStatus: string;
  createdDate?: Date;
};

export type UserProfile = {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: Gender;
  imageUrl: string;
  user: User;
};

export type Mother = {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  phone?: string;
  birthDate: Date;
  bloodType: string;
  RH?: string;
  photo?: string;
};

// export type Mother = {
//   id: Number;
//   bloodType: String;
//   birthDate: Date;
//   user: User;
// };

export type Child = {
  id: number;

  firstName: string;
  middleName: string;
  lastName: string;

  isVaccineCompleted: string;
  motherFullName: string;
  // motherFirstName: string;
  // motherMiddleName: string;
  // motherLastName: string;
};

export type Vaccine = {
  id: number;
  name: string;
  category: string;

  description?: string;
  dose: number;
  duration: number;
  createdAt?: Date;
  ageRange: string;
  // dosage: string;
  // dosageType: string;
  // duration: string;
  // createdDate: Date;
};

export type Certificate = {
  id: number;
  child: Child;
  name: string;
  issuedDate: Date;
};

export type Appointment = {
  id: number;
  // motherFirstName: string;
  // motherLastName: string;
  // motherMiddleName: string;
  motherFullName: string;
  // healthStationName: string;

  visitDate: Date;

  // Visit time interval
  fromTime: string;
  toTime: string;
  visitTimeInterval: string;

  // the health professional who will attend the appointment
  healthProfessionalFullName?: string;

  healthProfessionalTitle?: string;
  // healthProfessionalEmail: string;

  description?: String;
  status: AppointmentStatus;
  createdDate?: Date;
};

export type AppointmentStatus =
  | "pending"
  | "suspended"
  | "completed"
  | "cancelled"
  | "failed";

export type News = {
  id: number;
  user: User;
  title: string;
  description: string;
  imageUrl: string;
  createdDate: Date;
};

export type Report = {
  id: number;
  user: User;
  name: String;
  documentUrl: String;
  createdDate: Date;
};

export type Address = {
  id: number;
  user: User;
  city: string;
  subcity: string;
  wereda: string;
  kebele: string;
  houseNumber: string;
};

// export type HealthProfessional = {
//   id: Number;
//   profile: UserProfile;
//   title: String;
//   position: String;
//   healthStation: HealthStation;
// };

export type HealthProfessionalProp = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  gender: Gender;
  imageUrl?: string;
  role?: string;
  title?: string;
  position: string;
};

type Gender = "male" | "female";

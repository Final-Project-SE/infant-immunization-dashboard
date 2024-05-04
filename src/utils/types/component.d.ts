export type CreateHealthStationDto = {
  name: String;
  type: String;
  region: String;
  city: String;
  subcity: String;
  kebele: String;
  houseNumber: String;
  description?: String;
};

export type HealthStation = {
  id: Number;
  name: String;
  type?: String;
  region: String;
  zone: String;
  city: String;
  subcity?: String;
  kebele?: String;
  houseNumber: String;
  description?: String;
  images?: String[];
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
  middleName?: String;
  gender: Gender;
  imageUrl: String;
  user: User;
};

export type Mother = {
  id: String;
  firstName: String;
  lastName: String;
  middleName?: String;
  phone?: String;
  birthDate: Date;
  bloodType: String;
  RH?: String;
  photo?: String;
};

// export type Mother = {
//   id: Number;
//   bloodType: String;
//   birthDate: Date;
//   user: User;
// };

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
  motherFirstName: String;
  motherLastName: String;
  motherMiddleName: String;
  healthStationName: String;

  visitDate: Date;

  // Visit time interval
  fromTime: String;
  toTime: String;
  visitTimeInterval: String;

  // the health professional who will attend the appointment
  healthProfessionalName: String;
  healthProfessionalTitle: String;
  healthProfessionalEmail: String;

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

// export type HealthProfessional = {
//   id: Number;
//   profile: UserProfile;
//   title: String;
//   position: String;
//   healthStation: HealthStation;
// };

export type HealthProfessionalProp = {
  id: Number;
  firstName: string;
  lastName: string;
  email: String;
  phone?: String;
  gender: Gender;
  imageUrl?: String;
  role: String;
  title: String;
  position: String;
};

type Gender = "male" | "female";

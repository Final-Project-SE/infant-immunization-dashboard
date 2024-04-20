import React from "react";
import PageHeader from "@/components/header/page-header";
import HealthProfessionalTable from "@/components/table/health-professional-table";
import { HealthProfessionalProp } from "@/utils/types/component";

const healthProfessionals: HealthProfessionalProp[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    imageUrl: "",
    email: "johndoe@gmail.com",
    phone: "0912345678",
    role: "healthprofessional",
    title: "Medical Doctor",
    position: "Medical Doctor",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    gender: "female",
    imageUrl: "",
    email: "janedoe@gmail.com",
    phone: "0972345678",
    role: "healthprofessional",
    title: "Medical Doctor",
    position: "Medical Doctor",
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Doe",
    gender: "female",
    imageUrl: "",
    email: "janedoe@gmail.com",
    phone: "0972345678",
    role: "healthprofessional",
    title: "Medical Doctor",
    position: "Nurse",
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Doe",
    gender: "male",
    imageUrl: "",
    email: "janedoe@gmail.com",
    phone: "0972345678",
    role: "healthprofessional",
    title: "Medical Doctor",
    position: "Health Assistant",
  },
];

function HealthProfessionals() {
  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="HealthProfessionals" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <HealthProfessionalTable healthProfessionals={healthProfessionals} />
      </div>
    </div>
  );
}

export default HealthProfessionals;

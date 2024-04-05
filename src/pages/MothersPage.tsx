

import PageHeader from "@/components/header/page-header";
import MotherTable from "@/components/table/mother-table";
import { Mother } from "@/utils/types/component";

// Dummy mother data
const mothers: Mother[] = [
  {
    id: 1,
    firstName: "Belatu",
    lastName: "Jinka",
    email: "belatu@example.com",
    phone: "1234567890",
    bloodType: "A+",
    birthDate: new Date('1990-05-15'),
    role: "mother",
    otp: "123456",
    activeStatus: "active",
    createdDate: new Date('2024-04-05')
  },
  {
    id: 2,
    firstName: "gerawa",
    lastName: "Jemberu",
    email: "gerawa@example.com",
    phone: "9876543210",
    bloodType: "B+",
    birthDate: new Date('1985-08-20'),
    role: "mother",
    otp: "654321",
    activeStatus: "active",
    createdDate: new Date('2024-04-06')
  },
  
];

function MothersPage() {
  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Mothers" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <MotherTable mothers={mothers} />
      </div>
    </div>
  );
}

export default MothersPage;








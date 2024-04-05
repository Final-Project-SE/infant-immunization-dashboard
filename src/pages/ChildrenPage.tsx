import PageHeader from "@/components/header/page-header";
import ChildTable from "@/components/table/child-table";
import { Child, Mother } from "@/utils/types/component";

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

// Dummy child data
const children: Child[] = [
  {
    id: 1,
    mother: mothers[0],
    firstName: "Babi",
    lastName: "Daba",
    middleName: "Gacho",
    birthDate: new Date('2010-01-01'),
  },
  {
    id: 2,
    mother: mothers[1],
    firstName: "Babi",
    lastName: "Daba",
    middleName: "Gacho",
    birthDate: new Date('2012-02-02'),
  },
];

function ChildrenPage() {
  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Children" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <ChildTable children={children } />
      </div>
    </div>
  );
}

export default ChildrenPage;

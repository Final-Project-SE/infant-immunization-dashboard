import PageHeader from "@/components/header/page-header";
import MotherTable from "@/components/table/mother-table";

import { Mother } from "@/utils/types/component";

// Dummy mother data
const mothers: Mother[] = [
  {
    id: "1",
    firstName: "Abebech",
    lastName: "Kebede",
    middleName: "Ayele",
    phone: "0901020301",
    birthDate: new Date(Date.now()),
    bloodType: "A+",
  },
  {
    id: "2",
    firstName: "Abebech",
    lastName: "Kebede",
    middleName: "Ayele",
    phone: "0911020304",
    birthDate: new Date(Date.now()),
    bloodType: "A+",
  },
  {
    id: "3",
    firstName: "Abebech",
    lastName: "Kebede",
    middleName: "Ayele",
    phone: "0921020304",
    birthDate: new Date(Date.now()),
    bloodType: "A+",
  },
  {
    id: "4",
    firstName: "Abebech",
    lastName: "Kebede",
    middleName: "Ayele",
    phone: "093102030",
    birthDate: new Date(Date.now()),
    bloodType: "A+",
  },
];

function MothersPage() {
  return (
    <div className="mx-auto w-full bg-muted rounded  mt-1 pb-4 ">
      <PageHeader pageName="Mothers" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <MotherTable mothers={mothers as any} />
      </div>
    </div>
  );
}

export default MothersPage;

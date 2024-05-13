import PageHeader from "@/components/header/page-header";
import MotherTable from "@/components/table/mother-table";
import useMothers from "@/api/useMothers";
import {
  Appointment,
  ChildOfMother,
  ChildVaccine,
  ChildVaccineType,
  Mother,
  MotherVaccine,
} from "@/utils/types/component";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import { useGetMothers } from "@/hooks/api/mother";
import { Button } from "@/components/ui/button";
import AppointmentTable from "@/components/table/appointment-table";
import ChildrenTable from "@/components/table/children-table";
import {
  useGetChild,
  useGetChildren,
  useGetChildrenByMother,
} from "@/hooks/api/children";
import ChildrenByMotherTable from "@/components/table/children-by-mother-table";
import {
  useGetChildrenVaccOfMother,
  useGetVaccinationsOfChild,
  useGetVaccinesOfMother,
} from "@/hooks/api/vaccine";
import MotherVaccineTable from "@/components/table/mother-vaccine-table";
import { formatDate } from "@/utils/constants/date";
import ChildrenOfMotherVaccTable from "@/components/table/children-vaccination-by-mother";
import ChildVaccines from "@/components/table/child-vaccination";
import ChildVaccinesTable from "@/components/table/child-vaccination";

function ChildDetailPage() {
  const { isPending: isFetchingChildren, child } = useGetChild();
  const { isPending: isFetchingVaccines, vaccines } =
    useGetVaccinationsOfChild();

  console.log(child);

  if (isFetchingChildren || isFetchingVaccines) return <Spinner />;

  const motherFullName = `${child.mother.user.profile.firstName} ${child.mother.user.profile.lastName}`;
  const hpFullName = `${child.registrar.profile.firstName} ${child.registrar.profile.lastName}`;
  const hsName = child.mother.user.healthStation.name;

  const formattedChildVaccinination: ChildVaccineType[] = vaccines.map(
    (vaccine: any) => {
      return {
        id: vaccine.id,
        vaccine: vaccine.vaccine.name,
        healthStation: vaccine.healthStation.name,
        isGiven: vaccine.isGiven,
        givenDate: formatDate(new Date(vaccine.createdDateTime)),
      };
    }
  );

  return (
    <div className="mx-auto w-full bg-muted rounded mt-1 pb-4">
      <PageHeader pageName="Mothers Profile" />
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-6 px-4 relative mb-2">
        {/* profile section  */}
        <div className="flex items-center gap-8">
          <img
            src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=740"
            alt="child"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <h1 className="font-semibold text-xl tracking-tight">
              Kiya Kebede Kebede
            </h1>
            {/* <p className="text-sm ">Completed Vaccination</p> */}
          </div>
          <div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
      </div>

      {/* child information section  */}
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-2 px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div>
            <h1 className="font-semibold text-lg">Child Information</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">Full name</p>
                <p className="text-sm">Kiya Abebe Kebede </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Mother name</p>
                <p className="text-sm">{motherFullName}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Birth Date</p>
                <p className="text-sm">
                  {formatDate(new Date(child.birthdate))}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Blood Type</p>
                <p className="text-sm">{child.bloodType}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Health Station</p>
                <p className="text-sm">{hsName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Vacc Status</p>
                <p className="text-sm">
                  {child.isVaccineCompleted ? "Completed" : "Not Completed"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*child vaccination section */}
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <h1 className="font-semibold text-xl tracking-tight mb-4">
          Child Vaccination
        </h1>
        <div className="my-2 flex gap-4 items-center">
          <Button variant="outline">Add Vaccination</Button>
          <Button variant="outline" disabled={!child.isVaccineCompleted}>
            Generate Vaccination
          </Button>
        </div>
        <ChildVaccines vaccines={formattedChildVaccinination} />
      </div>
    </div>
  );
}

export default ChildDetailPage;

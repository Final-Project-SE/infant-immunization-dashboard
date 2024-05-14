import PageHeader from "@/components/header/page-header";
import MotherTable from "@/components/table/mother-table";
import useMothers from "@/api/useMothers";
import {
  Appointment,
  ChildOfMother,
  ChildVaccine,
  Mother,
  MotherVaccine,
} from "@/utils/types/component";
import { Spinner } from "@/components/ui";
import Empty from "@/components/error-display/empty";
import { useGetMother, useGetMothers } from "@/hooks/api/mother";
import { Button } from "@/components/ui/button";
import AppointmentTable from "@/components/table/appointment-table";
import ChildrenTable from "@/components/table/children-table";
import { useGetChildren, useGetChildrenByMother } from "@/hooks/api/children";
import ChildrenByMotherTable from "@/components/table/children-by-mother-table";
import {
  useGetChildrenVaccOfMother,
  useGetVaccinesOfMother,
} from "@/hooks/api/vaccine";
import MotherVaccineTable from "@/components/table/mother-vaccine-table";
import { formatDate } from "@/utils/constants/date";
import ChildrenOfMotherVaccTable from "@/components/table/children-vaccination-by-mother";
import AddChildVaccinationModal from "@/components/modal/child-vaccination-modal";

const appointments: Appointment[] = [
  {
    id: 1,
    // motherFirstName: "Jane",
    // motherLastName: "Doe",
    // motherMiddleName: "Doe",
    motherFullName: "Jane Doe",
    healthProfessionalFullName: "John Doe",

    visitDate: new Date(),

    status: "pending",
  },
  {
    id: 2,
    motherFullName: "Jane Doe",
    healthProfessionalFullName: "John Doe",

    visitDate: new Date(),

    status: "pending",
  },
  {
    id: 3,

    motherFullName: "Jane Doe",
    healthProfessionalFullName: "John Doe",

    visitDate: new Date(),

    status: "pending",
  },
];

function MotherProfilePage() {
  const { isPending: isFetchingMotherData, mother } = useGetMother();

  const { isPending: isFetchingChildData, children } = useGetChildrenByMother();

  const { isPending: isFetchingMotherVaccineData, vaccines: motherVaccines } =
    useGetVaccinesOfMother();

  if (
    isFetchingMotherData ||
    isFetchingChildData ||
    isFetchingMotherVaccineData
  )
    return <Spinner />;

  console.log(mother);
  console.log(motherVaccines);
  console.log(children);

  const formattedChildren: ChildOfMother[] = children.map((child: any) => {
    return {
      id: child?.id,
      firstName: child?.firstName,
      lastName: child?.lastName,
      middleName: child?.middleName,
      isVaccineCompleted:
        child?.isVaccineCompleted == true ? "completed" : "ongoing",
    };
  });

  const formattedMotherVaccines: MotherVaccine[] = motherVaccines?.map(
    (vaccine: any) => {
      return {
        id: vaccine?.id,
        vaccine: vaccine?.vaccine?.name,
        healthStation: vaccine?.healthStation?.name,
        isGiven: vaccine?.isGiven,
        givenDate: formatDate(new Date(vaccine?.createdDateTime)),
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
            alt="mother"
            className="w-40 h-40 rounded-full object-cover"
          />
          <div>
            <h1 className="font-semibold text-xl tracking-tight">
              Abebech Kebede Kebede
            </h1>
            <p className="text-sm ">+251000010203</p>
          </div>
          <div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
      </div>

      {/* mother information section  */}
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-2 px-4 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div>
            <h1 className="font-semibold text-lg">Mother Information</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm">{mother.email} </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-sm">{mother.phone}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Birth Date</p>
                <p className="text-sm">12/12/2021</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Blood Type</p>
                <p className="text-sm">A+</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">RH</p>
                <p className="text-sm">RH</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Health Station</p>
                <p className="text-sm">Health Station 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mother appointments section  */}
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto  mt-2   py-4 px-4  relative">
        <h1 className="font-semibold text-xl tracking-tight mb-4">
          Appointments
        </h1>
        <div className="my-2">
          <Button variant="outline">Schedule appointment</Button>
        </div>

        <AppointmentTable appointments={appointments as Appointment[]} />
      </div>

      {/* mother vaccination section */}
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <h1 className="font-semibold text-xl tracking-tight mb-4">
          Mother Vaccination
        </h1>
        <div className="my-2">
          <AddChildVaccinationModal>
            <Button variant="outline">Vaccinate</Button>
          </AddChildVaccinationModal>
        </div>
        <MotherVaccineTable vaccines={formattedMotherVaccines} />
      </div>

      {/* child vaccination section */}
      {/* <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <h1 className="font-semibold text-xl tracking-tight mb-4">
          Child Vaccination
        </h1>
        <ChildrenOfMotherVaccTable vaccines={formattedChildrenVaccines} />
      </div> */}

      {/* mother child section */}
      <div className="mx-auto w-[98%] h-fit bg-card rounded overflow-auto mt-2 py-4 px-4 relative">
        <h1 className="font-semibold text-xl tracking-tight mb-4">Children</h1>
        <div className="my-2">
          <Button variant="outline">Add child</Button>
        </div>
        {/* child table */}
        <ChildrenByMotherTable children={formattedChildren} />
      </div>
    </div>
  );
}

export default MotherProfilePage;

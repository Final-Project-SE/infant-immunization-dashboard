import CreateAppointmentModal from "../modal/create-appointment-modal";
import { Button } from "../ui/button";

const CreateAppointmentToolbarAction = (mother: any) => {
  console.log(mother);
  return (
    <CreateAppointmentModal mother={mother}>
      <Button>Create new appointment</Button>
    </CreateAppointmentModal>
  );
};

export default CreateAppointmentToolbarAction;

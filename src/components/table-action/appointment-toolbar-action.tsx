import CreateAppointmentModal from "../modal/create-appointment-modal";
import { Button } from "../ui/button";

const CreateAppointmentToolbarAction = () => {
  return (
    <CreateAppointmentModal onCreate={() => {}}>
      <Button>Create new appointment</Button>
    </CreateAppointmentModal>
  );
};

export default CreateAppointmentToolbarAction;

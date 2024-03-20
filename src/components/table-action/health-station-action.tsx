import CreateAdminModal from "../modal/create-admin-modal";
import { Button } from "../ui/button";

const AdminTableToolbarAction = () => {
  return (
    <CreateAdminModal onCreate={() => {}}>
      <Button>Create new health station</Button>
    </CreateAdminModal>
  );
};

export default AdminTableToolbarAction;

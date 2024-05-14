import CreateAdminModal from "../modal/create-admin-modal";
import RegisterMotherModal from "../modal/register-mother-modal";
import { Button } from "../ui/button";

const MotherTableToolbarAction = () => {
  return (
    <RegisterMotherModal>
      <Button>Register new mother</Button>
    </RegisterMotherModal>
  );
};

export default MotherTableToolbarAction;

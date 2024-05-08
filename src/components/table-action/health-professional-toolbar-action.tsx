import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";

const AddHPToolbarAction = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/health-professionals/add")}>
      Add new HP
    </Button>
  );
};

export default AddHPToolbarAction;

import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";

const VaccineTableToolbarAction = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/vaccines/add")}>
      Create new vaccine
    </Button>
  );
};

export default VaccineTableToolbarAction;

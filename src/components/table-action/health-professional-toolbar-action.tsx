import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";

const AddHealthStationToolbarAction = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("health-professional/add")}>
      Add new health professional
    </Button>
  );
};

export default AddHealthStationToolbarAction;

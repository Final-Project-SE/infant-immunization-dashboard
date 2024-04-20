import { useNavigate } from "react-router-dom";

import { Button } from "../ui/button";

const HealthStationTableToolbarAction = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/health-stations/add")}>
      Create new health station
    </Button>
  );
};

export default HealthStationTableToolbarAction;

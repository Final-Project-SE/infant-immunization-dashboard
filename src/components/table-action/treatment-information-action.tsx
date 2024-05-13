import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const TreatmentInformationTableToolbarAction = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/treatment-informations/add")}>
      Create new treatment information
    </Button>
  );
};

export default TreatmentInformationTableToolbarAction;
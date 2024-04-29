
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const UpdateReportRowAction = ({ rowData }: { rowData: Report }) => {
  const navigate = useNavigate();
  const handleUpdate = () => {
    
    console.log("Updating report with ID:", rowData.id);
    navigate(`/reports/${rowData.id}/edit`);
  };

  return (
    <Button onClick={handleUpdate}>
      Update
    </Button>
  );
};


const ViewDetailRowAction = ({ rowData }: { rowData: Report }) => {
  const navigate = useNavigate();
  const handleViewDetail = () => {
   
    console.log("Viewing detail of report with ID:", rowData.id);
    navigate(`/reports/${rowData.id}`);
  };

  return (
    <Button onClick={handleViewDetail}>
      View Detail
    </Button>
  );
};


const DeleteReportRowAction = ({ rowData }: { rowData: Report }) => {
  const handleDelete = () => {
    
    console.log("Deleting report with ID:", rowData.id);
  };

  return (
    <Button onClick={handleDelete}>
      Delete
    </Button>
  );
};

export { UpdateReportRowAction, ViewDetailRowAction, DeleteReportRowAction };

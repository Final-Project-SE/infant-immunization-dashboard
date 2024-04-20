import { Edit, Eye, MessageSquareMore } from "lucide-react";
import { MenuItem } from "@mui/material";
import { Cancel, Delete } from "@mui/icons-material";

import ConfirmModal from "../modal/confirm-modal";
import { useNavigate } from "react-router-dom";

export const ViewAppointment = ({ row }: { row: any }) => {
  console.log(row);
  const navigate = useNavigate();
  return (
    <MenuItem
      key="view"
      onClick={() => navigate(`/appointments/${row.id}`)}
      className="text-gray-600 flex items-center gap-2"
    >
      <Eye className="text-green-500 text-sm" /> Detail
    </MenuItem>
  );
};

export const RescheduleAppointment = ({ row }: { row: any }) => {
  console.log(row);
  return (
    <MenuItem
      key="edit"
      onClick={() => {}}
      className="text-gray-600 flex items-center gap-2"
    >
      <Edit className="text-green-500 text-sm" /> Reschedule
    </MenuItem>
  );
};

export const SendReminder = ({ row }: { row: any }) => {
  console.log(row);
  return (
    <MenuItem
      key="send-reminder"
      onClick={() => {}}
      className="text-gray-600 flex items-center gap-2"
    >
      <MessageSquareMore className="text-yellow-500 text-sm" /> Send Reminder
    </MenuItem>
  );
};

export const CancelAppointment = ({ row }: { row: any }) => {
  console.log(row);
  return (
    <MenuItem
      key="cancel"
      onClick={() => console.info("Cancel")}
      className="text-gray-600 flex items-center gap-2"
    >
      <Cancel className="text-red-500 text-sm" /> Cancel
    </MenuItem>
  );
};

export const DeleteAppointment = ({
  row,
  onConfirm,
}: {
  row: any;
  onConfirm: Function;
}) => {
  console.log(row);
  return (
    <ConfirmModal
      actionName="Delete"
      title="Delete appointment"
      description="Are you sure you want to delete this appointment permanently? This action cannot be undone."
      onConfirm={() => {
        onConfirm();
      }}
    >
      <MenuItem
        key="delete"
        onClick={() => console.info("Delete")}
        className="text-gray-600 flex items-center gap-2"
      >
        <Delete className="text-red-500 text-sm" /> Delete
      </MenuItem>
    </ConfirmModal>
  );
};

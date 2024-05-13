import { Baby, Eye, ShieldX, SquarePen, Timer } from "lucide-react";
import { MenuItem } from "@mui/material";
import { Delete } from "@mui/icons-material";

import ConfirmModal from "../modal/confirm-modal";
import { useNavigate } from "react-router-dom";
import UpdateMotherModal from "../modal/update-mother-modal";
import CreateAppointmentModal from "../modal/create-appointment-modal";
import RegisterChildModal from "../modal/register-child-modal";

export const ViewDetailAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      key="edit"
      onClick={() => navigate(`/mothers/${row.id}`)}
      className="text-gray-600 flex items-center gap-2"
    >
      <Eye className="text-green-500 text-sm" />
      Detail
    </MenuItem>
  );
};

export const MakeAppointmentsAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <CreateAppointmentModal mother={row}>
      <MenuItem key="edit" className="text-gray-600 flex items-center gap-2">
        <Timer className="text-green-500 text-sm" />
        Appointment
      </MenuItem>
    </CreateAppointmentModal>
  );
};

export const UpdateMotherAction = ({ row }: { row: any }) => {
  return (
    <UpdateMotherModal mother={row} onUpdate={() => {}}>
      <MenuItem
        key="edit"
        onClick={() => {}}
        className="text-gray-600 flex items-center gap-2"
      >
        <SquarePen className="text-green-500 text-xs" /> Update
      </MenuItem>
    </UpdateMotherModal>
  );
};

export const RegisterChildAction = ({ row }: { row: any }) => {
  return (
    <RegisterChildModal motherEmail={row.email}>
      <MenuItem
        key="edit"
        onClick={() => {}}
        className="text-gray-600 flex items-center gap-2"
      >
        <Baby className="text-green-500 text-xs" /> Register Child
      </MenuItem>
    </RegisterChildModal>
  );
};

export const DeactivateMotherAction = ({ row }: { row: any }) => {
  return (
    <ConfirmModal
      actionName="Deactivate"
      title="Deactivate mother"
      description="Are you sure you want to deactivate this mother?"
      onConfirm={() => {}}
    >
      <MenuItem
        key="deactivate"
        onClick={() => {}}
        className="text-gray-600 flex items-center gap-2"
      >
        <ShieldX className="text-red-500 text-xs" /> Deactivate
      </MenuItem>
    </ConfirmModal>
  );
};

export const DeleteMotherAction = ({ row }: { row: any }) => {
  console.log(row);
  return (
    <ConfirmModal
      actionName="Delete"
      title="Delete mother data"
      description="Are you sure you want to delete this data permanently? This action cannot be undone."
      onConfirm={() => {}}
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

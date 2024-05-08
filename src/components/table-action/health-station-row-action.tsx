import { Edit, Eye, ShieldX } from "lucide-react";
import { MenuItem } from "@mui/material";
import { Delete } from "@mui/icons-material";

import UpdateAdminModal from "../modal/update-admin-modal";
import ConfirmModal from "../modal/confirm-modal";
import { useNavigate } from "react-router-dom";
import { useDeleteHealthStation } from "@/hooks/api/health-station";

export const ViewDetailRowAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      key="view"
      onClick={() => navigate(`/healthstations/${row.id}`)}
      className="text-gray-600 flex items-center gap-2"
    >
      <Eye className="text-green-500 text-sm" /> Detail
    </MenuItem>
  );
};

export const UpdateHealthStationRowAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <UpdateAdminModal admin={row} onUpdate={() => {}}>
      <MenuItem
        key="edit"
        onClick={() => navigate(`/health-stations/${row.id}/edit`)}
        className="text-gray-600 flex items-center gap-2"
      >
        <Edit className="text-yellow-500 text-sm" /> Update
      </MenuItem>
    </UpdateAdminModal>
  );
};

export const DeactivateHealthStationRowAction = ({ row }: { row: any }) => {
  console.log(row);
  return (
    // <ConfirmModal
    //   actionName="Deactivate"
    //   title="Deactivate Health Station"
    //   description="Are you sure you want to deactivate this health station?"
    //   onConfirm={() => {}}
    // >
    <MenuItem
      key="deactivate"
      onClick={() => {}}
      className="text-gray-600 flex items-center gap-2"
    >
      <ShieldX className="text-red-500 text-sm" /> Deactivate
    </MenuItem>
    // </ConfirmModal>
  );
};

export const DeleteHealthStationRowAction = ({ row }: { row: any }) => {
  const { deleteHs } = useDeleteHealthStation();
  return (
    <ConfirmModal
      actionName="Delete"
      title="Delete health station"
      description="Are you sure you want to delete this data permanently? This action cannot be undone"
      onConfirm={() => {
        deleteHs(row.id);
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

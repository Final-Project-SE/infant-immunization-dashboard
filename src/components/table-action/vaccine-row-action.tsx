import { Edit, Eye, ShieldX } from "lucide-react";
import { MenuItem } from "@mui/material";
import { Delete } from "@mui/icons-material";

import UpdateAdminModal from "../modal/update-admin-modal";
import ConfirmModal from "../modal/confirm-modal";
import { useNavigate } from "react-router-dom";

export const generateCertificateRowAction = ({ row }: { row: any }) => {
  return (
    <MenuItem
      key="generate"
      onClick={() => {}}
      className="text-gray-600 flex items-center gap-2"
    >
      <Eye className="text-green-500 text-sm" /> Generate Certificate
    </MenuItem>
  );
};

export const ViewDetailRowAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      key="view"
      onClick={() => navigate(`/vaccines/${row.id}`)}
      className="text-gray-600 flex items-center gap-2"
    >
      <Eye className="text-green-500 text-sm" /> Detail
    </MenuItem>
  );
};

export const UpdateVaccineRowAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <UpdateAdminModal admin={row} onUpdate={() => {}}>
      <MenuItem
        key="edit"
        onClick={() => navigate(`/vaccines/${row.id}/edit`)}
        className="text-gray-600 flex items-center gap-2"
      >
        <Edit className="text-yellow-500 text-sm" /> Update status
      </MenuItem>
    </UpdateAdminModal>
  );
};

export const DeactivateVaccineRowAction = ({ row }: { row: any }) => {
  console.log(row);
  return (
    <MenuItem
      key="deactivate"
      onClick={() => {}}
      className="text-gray-600 flex items-center gap-2"
    >
      <ShieldX className="text-red-500 text-sm" /> Deactivate
    </MenuItem>
  );
};

export const DeleteVaccineRowAction = ({ row }: { row: any }) => {
  console.log(row);
  return (
    <ConfirmModal
      actionName="Delete"
      title="Delete vaccine"
      description="Are you sure you want to delete this data permanently? This action cannot be undone"
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

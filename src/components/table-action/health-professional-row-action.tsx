import { Edit } from "lucide-react";
import { MenuItem } from "@mui/material";
import { Delete } from "@mui/icons-material";

import ConfirmModal from "../modal/confirm-modal";
import { useNavigate } from "react-router-dom";
import { useDeleteHP } from "@/hooks/api/health-professional";

export const UpdateHealthProfessionalAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      key="edit"
      onClick={() => navigate(`/health-professionals/${row.id}/edit`)}
      className="text-gray-600 flex items-center gap-2"
    >
      <Edit className="text-green-500 text-sm" /> Update
    </MenuItem>
  );
};

export const DeleteHealthProfessionalAction = ({ row }: { row: any }) => {
  const { deleteHP } = useDeleteHP();

  console.log(row);
  return (
    <ConfirmModal
      actionName="Delete"
      title="Delete health professional"
      description="Are you sure you want to delete this health professional data permanently? This action cannot be undone."
      onConfirm={() => {
        deleteHP(row.id);
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

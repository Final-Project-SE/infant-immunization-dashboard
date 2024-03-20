import { Edit } from "lucide-react";
import { MenuItem } from "@mui/material";
import { Delete } from "@mui/icons-material";

import UpdateAdminModal from "../modal/update-admin-modal";
import ConfirmModal from "../modal/confirm-modal";

export const UpdateAdminAction = ({ row }: { row: any }) => {
  return (
    <UpdateAdminModal admin={row} onUpdate={() => {}}>
      <MenuItem
        key="edit"
        onClick={() => console.info("Edit")}
        className="text-gray-600 flex items-center gap-2"
      >
        <Edit className="text-green-500 text-sm" /> Update
      </MenuItem>
    </UpdateAdminModal>
  );
};

export const DeleteAdminAction = ({ row }: { row: any }) => {
  return (
    <ConfirmModal
      actionName="Delete"
      title="Delete admin"
      description="Are you sure you want to delete this booking permanently? This action cannot be undone."
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

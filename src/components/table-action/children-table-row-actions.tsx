import { Eye, SquarePen, Timer } from "lucide-react";
import { MenuItem } from "@mui/material";
import { Delete } from "@mui/icons-material";

import ConfirmModal from "../modal/confirm-modal";
import { useNavigate } from "react-router-dom";
import UpdateChildModal from "../modal/update-children-modal";

export const ViewDetailAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      key="edit"
      onClick={() => navigate(`/children/${row.id}`)}
      className="text-gray-600 flex items-center gap-2"
    >
      <Eye className="text-green-500 text-sm" />
      Detail
    </MenuItem>
  );
};

export const ViewChildrenAction = ({ row }: { row: any }) => {
  const navigate = useNavigate();
  return (
    <MenuItem
      key="edit"
      onClick={() => navigate(`/mothers/${row.mother.id}`)}
      className="text-gray-600 flex items-center gap-2"
    >
      <Timer className="text-green-500 text-sm" />
      Mother
    </MenuItem>
  );
};

export const UpdateChildAction = ({ row }: { row: any }) => {
  return (
    <UpdateChildModal child={row} onUpdate={() => {}}>
      <MenuItem
        key="edit"
        onClick={() => {}}
        className="text-gray-600 flex items-center gap-2"
      >
        <SquarePen className="text-green-500 text-xs" /> Update
      </MenuItem>
    </UpdateChildModal>
  );
};

export const DeleteChildAction = ({ row }: { row: any }) => {
  console.log(row);
  return (
    <ConfirmModal
      actionName="Delete"
      title="Delete child data"
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
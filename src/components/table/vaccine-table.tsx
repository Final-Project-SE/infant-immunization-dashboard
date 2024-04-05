import React from 'react';
import Table from '../ui/table';
import { Vaccine } from '@/utils/types/component';
import { MRT_ColumnDef } from 'material-react-table';
import {
    DeleteAdminAction,
    UpdateAdminAction,
  } from "../table-action/admin-table-row-actions";

interface VaccineTableProps {
  vaccines: Vaccine[];
}

const VaccineTable: React.FC<VaccineTableProps> = ({ vaccines }) => {
  const columns: MRT_ColumnDef<Vaccine>[] = [
    {
      header: 'Vaccine ID',
      accessorKey: 'id',
      enableSorting: true,
    },
    {
      header: 'Name',
      accessorKey: 'name',
      enableSorting: true,
    },
    {
      header: 'Description',
      accessorKey: 'description',
      enableSorting: true,
    },
    {
      header: 'Dosage',
      accessorKey: 'dosage',
      enableSorting: true,
    },
    {
      header: 'Age Range',
      accessorKey: 'ageRange',
      enableSorting: true,
    },
    {
      header: 'Dosage Type',
      accessorKey: 'dosageType',
      enableSorting: true,
    },
    {
      header: 'Duration',
      accessorKey: 'duration',
      enableSorting: true,
    },
    {
      header: 'Created Date',
      accessorKey: 'createdDate',
      enableSorting: true,
      Cell: ({ cell }) => (
        <p>{new Date(cell.getValue<Date>()).toLocaleDateString()}</p>
      ),
    },
  ];

  return <Table columnDefinition={columns as any} data={vaccines} RowActions={[UpdateAdminAction, DeleteAdminAction]}/>;
};

export default VaccineTable;

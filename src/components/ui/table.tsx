"use client";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useTheme } from "@/components/theme-provider/theme-provider";
import { TableThemeProvider } from "@/utils/providers/table-theme-provider";

const Table = ({
  data,
  columnDefinition,
  ToolBarAction,
  RowActions,
  enableRowNumbers,
}: {
  data: any[];
  columnDefinition: MRT_ColumnDef<any>[];
  ToolBarAction?: React.ComponentType<React.ComponentProps<any>>;
  RowActions?: React.ComponentType<React.ComponentProps<any>>[];
  enableRowNumbers?: boolean;
}) => {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <TableThemeProvider>
      <MaterialReactTable
        columns={columnDefinition}
        data={data}
        enableRowSelection={false}
        enableColumnOrdering
        enableColumnPinning
        enableStickyHeader
        enableRowActions={true}
        positionActionsColumn="last"
        enableRowNumbers={enableRowNumbers}
        enablePagination={false}
        renderRowActionMenuItems={({ row, closeMenu }) => [
          RowActions &&
            RowActions.map((RowAction) => (
              <RowAction row={row.original} closeMenu={closeMenu} />
            )),
        ]}
        renderTopToolbarCustomActions={({ table }) => {
          return ToolBarAction ? <ToolBarAction table={table} /> : null;
        }}
      />
    </TableThemeProvider>
  );
};

export default Table;

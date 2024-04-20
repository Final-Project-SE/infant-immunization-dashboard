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
        enablePagination={true}
        mrtTheme={{
          baseBackgroundColor: theme === "dark" ? "#1f2937" : "#fff",
        }}
        // change the text color of table on light and dark
        muiTableProps={{
          sx: {
            color: theme === "dark" ? "#fff" : "#000",
          },
        }}
        muiTableBodyRowProps={{
          sx: {
            // backgroundColor: "#1f2937",
            // color: "#fff",

            border: "0 solid transparent",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            // backgroundColor: "#1f2937",
            // color: "#fff",
            color: theme === "dark" ? "#fff" : "#000",
            border: "0 solid transparent",
          },
        }}
        muiTableHeadCellProps={{
          sx: {
            // backgroundColor: "#1f2937",
            // color: "#fff",
            border: "0 solid transparent",
            color: theme === "dark" ? "#fff" : "#000",
          },
        }}
        muiTableFooterRowProps={{
          sx: {
            // backgroundColor: "#1f2937",
            color: "red",
            // border: "0 solid transparent",
          },
        }}
        // change the color of toolbar icon

        renderRowActionMenuItems={({ row, closeMenu }) => [
          RowActions &&
            RowActions.map((RowAction) => (
              <RowAction
                row={row.original}
                closeMenu={closeMenu}
                sx={{ color: theme === "dark" ? "#fff" : "#000" }}
              />
            )),
        ]}
        renderTopToolbarCustomActions={({ table }) => {
          return ToolBarAction ? (
            <ToolBarAction
              table={table}
              style={{ color: theme === "dark" ? "#fff" : "#000" }}
            />
          ) : null;
        }}
      />
    </TableThemeProvider>
  );
};

export default Table;

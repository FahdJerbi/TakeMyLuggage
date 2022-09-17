import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Order Owner",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 200,
  },
  {
    field: "driver",
    headerName: "Driver",
    type: "string",
    width: 200,
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    width: 190,
    renderCell: (params) => {
      return (
        <>
          <DeleteOutline
            className="userListDelete"
            // onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    user: "Jon Snow",
    status: "Delivered",
    email: "Jon@gmail.com",
    driver: "yoyo",
    actions: "delete/update",
  },
  {
    id: 2,
    user: "Cersei Lannister",
    status: "Undelivered",
    email: "cersei@gmail.com",
    actions: "delete/update",
  },
  {
    id: 3,
    user: "Cersei Lannister",
    status: "Delivered",
    email: "cersei@gmail.com",
    actions: "delete/update",
  },
];

export default function DriversList() {
  return (
    <div style={{ height: 590, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

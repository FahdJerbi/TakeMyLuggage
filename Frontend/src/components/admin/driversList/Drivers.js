import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers } from "../../../redux/adminSlice";

const columns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "firstName",
    headerName: "First Name",
    width: 100,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 100,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    type: "string",
    width: 100,
  },
  {
    field: "availability",
    headerName: "Availability",
    type: "string",
    width: 100,
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    width: 196,
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

export default function DriversList() {
  // redux prep
  const { drivers, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllDrivers());
  }, []);

  return (
    <div style={{ height: 590, width: "100%" }}>
      <DataGrid
        rows={drivers}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

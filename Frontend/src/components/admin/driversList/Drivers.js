import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers, deleteDriver } from "../../../redux/adminSlice";

export default function DriversList() {
  // redux prep
  const { drivers, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  // get all drivers redux action
  React.useEffect(() => {
    dispatch(getAllDrivers());
  }, []);

  // delete driver redux action
  const handleDelete = (id) => {
    dispatch(deleteDriver(id));
  };

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
            <Button>
              <DeleteOutline
                className="driverListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 590, width: "100%" }}>
      <DataGrid
        rows={drivers}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

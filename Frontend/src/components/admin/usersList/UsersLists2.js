import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/adminSlice";

const columns = [
  { field: "_id", headerName: "ID", width: 225 },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 200,
  },
  {
    field: `firstName`,
    headerName: "First Name",
    // type: "string",
    width: 130,
  },
  {
    field: `lastName`,
    headerName: "Last Name",
    // type: "string",
    width: 130,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    type: "string",
    width: 150,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   type: "string",
  //   width: 200,
  // },
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

// const rows = [
//   {
//     id: 1,
//     user: "Jon Snow",
//     // status: "Available",
//     email: "Jon@gmail.com",
//     actions: "delete/update",
//   },
//   {
//     id: 2,
//     user: "Cersei Lannister",
//     // status: "Unavailable",
//     email: "cersei@gmail.com",
//     actions: "delete/update",
//   },
//   {
//     id: 3,
//     user: "Cersei Lannister",
//     // status: "Unavailable",
//     email: "cersei@gmail.com",
//     actions: "delete/update",
//   },
// ];

export default function UsersList() {
  const [usersInfo, setUsersInfo] = React.useState([]);

  // Redux prep
  const { users, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  // console.log("usersInfo:", usersInfo);

  // -------------------------------    Order is working  ------------------

  // React.useEffect(() => {
  //   axios
  //     .get("/api/getOrders")
  //     .then((res) => console.log(res.data.data))
  //     .catch((err) => console.log(err));
  // }, []);

  React.useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div style={{ height: 590, width: "100%" }}>
      <div>
        <h3>Search bar should be here !</h3>
      </div>
      <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

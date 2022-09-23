import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser } from "../../../redux/adminSlice";

// const columns = [
//   { field: "_id", headerName: "ID", width: 225 },
//   {
//     field: "email",
//     headerName: "Email",
//     type: "string",
//     width: 200,
//   },
//   {
//     field: `firstName`,
//     headerName: "First Name",
//     // type: "string",
//     width: 130,
//   },
//   {
//     field: `lastName`,
//     headerName: "Last Name",
//     // type: "string",
//     width: 130,
//   },
//   {
//     field: "isAdmin",
//     headerName: "Admin",
//     type: "string",
//     width: 150,
//   },
//   // {
//   //   field: "status",
//   //   headerName: "Status",
//   //   type: "string",
//   //   width: 200,
//   // },
//   {
//     field: "actions",
//     headerName: "Actions",
//     description: "This column has a value getter and is not sortable.",
//     width: 196,
//     renderCell: (params) => {
//       return (
//         <>
//           <Button>
//             <DeleteOutline
//               className="userListDelete"
//               // onClick={() => console.log(params.row._id)}
//               // onClick={() => dispatch(deleteUser(params.row._id))}
//             />
//           </Button>
//         </>
//       );
//     },
//   },
// ];

export default function UsersList() {
  // const [usersInfo, setUsersInfo] = React.useState(users);

  // Redux prep
  // const { users, loading } = useSelector((state) => state.admin);
  const { users } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  // console.log("usersInfo:", usersInfo);

  // -------------------------------    Order is working  ------------------

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  // console.log(usersInfo);

  // React.useEffect(() => {
  //   console.log("ok");
  // }, [usersInfo]);

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
            <Button>
              <DeleteOutline
                sx={{ color: "red" }}
                className="userListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </Button>
          </>
        );
      },
    },
  ];

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
        disableSelectionOnClick
      />
    </div>
  );
}

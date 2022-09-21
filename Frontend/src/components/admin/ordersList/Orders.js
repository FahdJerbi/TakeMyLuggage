import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../redux/adminSlice";

const columns = [
  { field: "_id", headerName: "ID", width: 70 },
  // {
  //   field: "user",
  //   headerName: "User",
  //   width: 300,
  // },
  {
    field: "distance",
    headerName: "Distance",
    // type: "number",
    width: 250,
  },
  {
    field: "createdAt",
    headerName: "createdAt",
    // type: "number",
    width: 230,
  },
  // {
  //   field: "phone",
  //   headerName: "Phone",
  //   type: "string",
  //   width: 300,
  // },
  // {
  //   field: "createdAt",
  //   headerName: "Created At",
  //   // type: "string",
  //   width: 200,
  // },
  // {
  //   field: "actions",
  //   headerName: "Actions",
  //   description: "This column has a value getter and is not sortable.",
  //   width: 196,
  //   renderCell: (params) => {
  //     return (
  //       <>
  //         <DeleteOutline
  //           className="userListDelete"
  //           // onClick={() => handleDelete(params.row.id)}
  //         />
  //       </>
  //     );
  //   },
  // },
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
  // const [usersInfo, setUsersInfo] = React.useState([]);

  // Redux prep
  const { orders, loading } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  // console.log(usersInfo);

  // React.useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setUsersInfo(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // React.useEffect(() => {
  //   axios
  //     .get("/api/getOrders")
  //     .then((res) => setUsersInfo(res.data.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // redux
  React.useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  return (
    <div style={{ height: 590, width: "100%" }}>
      <div>
        <h3>'Order Search/filter' bar should be here !!</h3>
      </div>
      <DataGrid
        rows={orders}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

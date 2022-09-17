import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "user",
  //   headerName: "User",
  //   width: 300,
  // },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 250,
  },
  {
    field: "name",
    headerName: "Name",
    type: "string",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 300,
  },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     type: "string",
  //     width: 200,
  //   },
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

const rows = [
  {
    id: 1,
    user: "Jon Snow",
    // status: "Available",
    email: "Jon@gmail.com",
    actions: "delete/update",
  },
  {
    id: 2,
    user: "Cersei Lannister",
    // status: "Unavailable",
    email: "cersei@gmail.com",
    actions: "delete/update",
  },
  {
    id: 3,
    user: "Cersei Lannister",
    // status: "Unavailable",
    email: "cersei@gmail.com",
    actions: "delete/update",
  },
];

export default function UsersList() {
  const [usersInfo, setUsersInfo] = React.useState([]);

  console.log(usersInfo);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsersInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ height: 590, width: "100%" }}>
      <div>
        <h3>'Order Search/filter' bar should be here !!</h3>
      </div>
      <DataGrid
        rows={usersInfo}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

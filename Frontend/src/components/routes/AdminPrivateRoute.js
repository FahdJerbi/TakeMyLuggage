import { Navigate } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  // use local storage to acquire user and auth-token:
  let authToken = localStorage.getItem("auth-token");
  let isAdmin = localStorage.getItem("isAdmin");

  if (!isAdmin && !authToken) {
    console.log(authToken);
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminPrivateRoute;

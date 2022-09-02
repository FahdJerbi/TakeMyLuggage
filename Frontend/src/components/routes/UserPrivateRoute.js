import { Navigate } from "react-router-dom";

const UserPrivateRoute = ({ children }) => {
  // use local storage to acquire user and auth-token:
  let authToken = localStorage.getItem("auth-token");
  let isUser = localStorage.getItem("isUser");

  if (!isUser && !authToken) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default UserPrivateRoute;

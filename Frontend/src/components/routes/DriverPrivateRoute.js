import { Navigate } from "react-router-dom";

const DriverPrivateRoute = ({ children }) => {
  // use local storage to acquire user and auth-token:
  let authToken = localStorage.getItem("auth-token");
  let isDriver = localStorage.getItem("isDriver");

  if (!isDriver && !authToken) {
    console.log(authToken);
    return <Navigate to="/login" />;
  }

  return children;
};

export default DriverPrivateRoute;

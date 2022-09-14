import ClientMap from "./components/client-map-pathselector/ClientMap";
import Register from "./components/views/Register";
import Login from "./components/views/Login";
import { Routes, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
import Layout from "./components/views/Layout";
import AdminMap from "./components/admin/AdminMap";
import UserPrivateRoute from "./components/routes/UserPrivateRoute";
import DriverMap from "./components/driver/DriverMap";
import DriverPrivateRoute from "./components/routes/DriverPrivateRoute";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          {/* create a private route for client map */}
          <Route
            path="map"
            element={
              <UserPrivateRoute>
                <ClientMap />
              </UserPrivateRoute>
            }
          />

          {/*  Driver private route */}

          <Route
            path="driver"
            element={
              <DriverPrivateRoute>
                <DriverMap />
              </DriverPrivateRoute>
            }
          />

          {/* create a private route for Admin map */}
          <Route path="admin" element={<AdminMap />} />
        </Route>
      </Routes>
    </div>
  );
}

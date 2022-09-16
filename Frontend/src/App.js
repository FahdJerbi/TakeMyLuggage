import ClientMap from "./components/client-map-pathselector/ClientMap";
import Register from "./components/views/Register";
import Login from "./components/views/Login";
import { Routes, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
import Layout from "./components/views/Layout";
import AdminMap from "./components/admin/AdminMap";
import DashboardLayout from "./components/admin/DashboardLayout";
import UserPrivateRoute from "./components/routes/UserPrivateRoute";
import DriverMap from "./components/driver/DriverMap";
import DriverPrivateRoute from "./components/routes/DriverPrivateRoute";
import Users from "./components/admin/Users";
import Drivers from "./components/admin/Drivers";
import AdminPrivateRoute from "./components/routes/AdminPrivateRoute";
import Dashboard from "./components/admin/Dashboard";
import Orders from "./components/admin/Orders";

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

          {/*  Admin Dashboard */}
          <Route
            path="admin"
            element={
              // <AdminPrivateRoute>
              <DashboardLayout />
              // </AdminPrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
            <Route path="drivers" element={<Drivers />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

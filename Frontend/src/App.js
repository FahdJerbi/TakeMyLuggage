import ClientMap from "./components/client-map-pathselector/ClientMap";
import Register from "./components/views/Register";
import Login from "./components/views/Login";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Layout from "./components/views/Layout";
import AdminMap from "./components/admin/AdminMap";
import UserPrivateRoute from "./components/routes/UserPrivateRoute";

export default function App() {
  return (
    <div className="App">
      {/* client map with custom path control */}
      {/* <ClientMap /> */}

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

          {/* create a private route for Admin map */}
          <Route path="admin" element={<AdminMap />} />
        </Route>
      </Routes>
    </div>
  );
}

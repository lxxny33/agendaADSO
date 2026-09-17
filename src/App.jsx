// Archivo: App.jsx
// Componente principal de Agenda ADSO.
// Se encarga de configurar las rutas y proteger el Dashboard.

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {

  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>

          {/* ---------------------------------------------
              RUTA DE LOGIN
          --------------------------------------------- */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* ---------------------------------------------
              RUTA PROTEGIDA
          --------------------------------------------- */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* ---------------------------------------------
              RUTA POR DEFECTO
          --------------------------------------------- */}

          <Route
            path="*"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

        </Routes>

      </AuthProvider>

    </BrowserRouter>
  );
}

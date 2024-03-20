import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { StateProvider } from "./store/provider";

import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import AppLayout from "./components/app-layout";

import Dashboard from "./pages/dashboard";
import Admins from "./pages/admins";
import AddHealthStationPage from "./pages/add-health-station";
import EditHealthStationPage from "./pages/edit-health-station";
// import HealthProfessionals from "./pages/health-professionals";

import "./styles/globals.css";

function App() {
  return (
    <StateProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route
              element={
                // <ProtectedRoute>
                <AppLayout />
                // </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />

              <Route
                path="health-stations/add"
                element={<AddHealthStationPage />}
              />
              <Route
                path="health-stations/:id/edit"
                element={<EditHealthStationPage />}
              />
              <Route path="admins" element={<Admins />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;

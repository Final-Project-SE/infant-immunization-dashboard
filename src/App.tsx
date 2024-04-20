import { ThemeProvider } from "@/components/theme-provider/theme-provider";

import "./styles/globals.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import AppLayout from "./components/app-layout";
import Dashboard from "./pages/dashboard";
import { StateProvider } from "./store/provider";
import PageNotFound from "./pages/page-not-found";
import Login from "./pages/login";
// import HealthProfessionals from "./pages/health-professionals";
import HealthStations from "./pages/health-stations";
import Vaccines from "./pages/vaccines";
import News from "./pages/news";
import Reports from "./pages/reports";
import Admins from "./pages/admins";
import AddHealthStationPage from "./pages/add-health-station";
import EditHealthStationPage from "./pages/edit-health-station";
import HealthProfessionals from "./pages/health-professionals";
import AddHealthProfessionalPage from "./pages/add-health-professional";
import EditHealthProfessionalPage from "./pages/edit-health-professional";
import MothersPage from "./pages/mother";
import { Toaster } from "./components/ui/toaster";
import AppointmentsPage from "./pages/appointments";

function App() {
  return (
    <StateProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
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

              <Route path="health-stations" element={<HealthStations />} />
              <Route
                path="health-stations/add"
                element={<AddHealthStationPage />}
              />
              <Route
                path="health-stations/:id/edit"
                element={<EditHealthStationPage />}
              />

              <Route
                path="health-professionals"
                element={<HealthProfessionals />}
              />
              <Route
                path="health-professionals/add"
                element={<AddHealthProfessionalPage />}
              />
              <Route
                path="health-professionals/:id/edit"
                element={<EditHealthProfessionalPage />}
              />
              <Route path="mothers" element={<MothersPage />} />
              {/* <Route path="mothers/:id" element={<MotherDetailPage />} /> */}

              <Route path="admins" element={<Admins />} />
              <Route path="appointments" element={<AppointmentsPage />} />

              <Route path="vaccines" element={<Vaccines />} />
              <Route path="reports" element={<Reports />} />
              <Route path="news" element={<News />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;

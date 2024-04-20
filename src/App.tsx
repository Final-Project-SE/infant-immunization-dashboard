// React related imports
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Component imports
import AppLayout from "./components/app-layout";

// Page imports
import Dashboard from "./pages/dashboard";
import HealthProfessionals from "./pages/health-professionals";
import Vaccines from "./pages/vaccines";
import News from "./pages/news";
import Reports from "./pages/reports";
import Admins from "./pages/admins";
import AddHealthStationPage from "./pages/add-health-station";
import EditHealthStationPage from "./pages/edit-health-station";
import HealthStations from "./pages/health-stations";
import AddHealthProfessionalPage from "./pages/add-health-professional";
import EditHealthProfessionalPage from "./pages/edit-health-professional";
import MothersPage from "./pages/mother";
import AppointmentsPage from "./pages/appointments";
import Login from "./pages/login";

// State management imports
import { StateProvider } from "./store/provider";

// Theme related imports
import { ThemeProvider } from "@/components/theme-provider/theme-provider";

// Query related imports
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Style imports
import "./styles/globals.css";
import PageNotFound from "./pages/page-not-found";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route
                element={
                  // <ProtectedRoute>
                  <AppLayout />
                  // </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="/dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="health-stations" element={<HealthStations />} />
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
                <Route path="appointments" element={<AppointmentsPage />} />
                <Route path="admins" element={<Admins />} />
                <Route path="vaccines" element={<Vaccines />} />
                <Route path="news" element={<News />} />
                <Route path="reports" element={<Reports />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </StateProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

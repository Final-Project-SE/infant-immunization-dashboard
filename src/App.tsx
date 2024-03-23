import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { StateProvider } from "./store/provider";

import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import AppLayout from "./components/app-layout";

import Dashboard from "./pages/dashboard";


import "./styles/globals.css";
import MotherPage from "./pages/mother page";
import Children from "./pages/children";
import Schedule from "./pages/schedule";
import Vaccination from "./pages/vaccination";

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
              <Route path="mother-page" element={<MotherPage />} />

              <Route
                path="children"
                element={<Children />}
              />
              <Route
                path="schedule"
                element={<Schedule />}
              />
              <Route path="Vaccination" element={<Vaccination />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;

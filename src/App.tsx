import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { StateProvider } from "./store/provider";

import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import AppLayout from "./components/app-layout";

import Dashboard from "./pages/dashboard";


import "./styles/globals.css";
import SchedulePage from "./pages/SchedulePage";
import VaccinesPage from "./pages/VaccinesPage";
import MothersPage from "./pages/MothersPage";
import ChildrenPage from "./pages/ChildrenPage";


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
              <Route path="MothersPage" element={<MothersPage/>} />

              <Route
                path="ChildrenPage"
                element={<ChildrenPage />}
              />
              <Route
                path="schedule"
                element={<SchedulePage />}
              />
              <Route path="VaccinesPage" element={<VaccinesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StateProvider>
  );
}

export default App;

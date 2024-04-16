import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { StateProvider } from "./store/provider";

import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import AppLayout from "./components/app-layout";

import Dashboard from "./pages/dashboard";
import Admins from "./pages/admins";
import AddHealthStationPage from "./pages/add-health-station";
import EditHealthStationPage from "./pages/edit-health-station";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import "./styles/globals.css";



// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <Route index element={<Navigate to="/dashboard" />} />
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

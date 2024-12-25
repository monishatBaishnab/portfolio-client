import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routes from "./routes/Routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster} from 'sonner'
// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Toaster />
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </StrictMode>
);

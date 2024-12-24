import App from "@/App";
import Home from "@/pages/Home";
import ProjectDetails from "@/pages/ProjectDetails";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        element: <ProjectDetails />,
      },
    ],
  },
]);
export default routes;

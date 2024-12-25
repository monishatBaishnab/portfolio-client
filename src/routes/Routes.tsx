import App from "@/App";
import BlogDetails from "@/pages/BlogDetails";
import Blogs from "@/pages/Blogs";
import Home from "@/pages/Home";
import ProjectDetails from "@/pages/ProjectDetails";
import Projects from "@/pages/Projects";
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
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
      },
    ],
  },
]);
export default routes;

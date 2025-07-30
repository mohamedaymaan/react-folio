import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import About from "./About/About";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import NotFound from "./404 NotFound/NotFound";

export default function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

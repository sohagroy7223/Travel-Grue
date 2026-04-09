import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home";

import Package from "../Page/Package";
import Testimonial from "../Page/Testimonial";
import Blog from "../Page/Blog";
import Contact from "../Page/Contact";
import Login from "../Page/Login";
import Register from "../Page/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "packages",
        Component: Package,
        loader: () => fetch("/hotels.json"),
      },
      {
        path: "testimonial",
        Component: Testimonial,
        loader: () => fetch("/testimonial.json"),
      },
      {
        path: "blog",
        Component: Blog,
        loader: () => fetch("/blog.json"),
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home";
import Packages from "../Page/packages";

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
        Component: Packages,
      },
      //   {
      //     path: "testimonial",
      //     Component: <Testimonial></Testimonial>,
      //   },
      //   {
      //     path: "blog",
      //     Component: <Blog></Blog>,
      //   },
      //   {
      //     path: "contact",
      //     Component: <Contact></Contact>,
      //   },
      //   {
      //     path: "login",
      //     Component: <Login></Login>,
      //   },
      //   {
      //     path: "register",
      //     Component: <Register></Register>,
      //   },
    ],
  },
]);

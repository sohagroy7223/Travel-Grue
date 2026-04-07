import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      //   {
      //     path: "packages",
      //     Component:package
      //   },
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

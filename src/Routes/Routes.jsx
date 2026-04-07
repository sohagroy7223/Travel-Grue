import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: <Root></Root>,
    children: [
      {
        index: true,
        Component: <Home></Home>,
      },
      {
        path: "packages",
        Component: <Packages></Packages>,
      },
      {
        path: "testimonial",
        Component: <Testimonial></Testimonial>,
      },
      {
        path: "blog",
        Component: <Blog></Blog>,
      },
      {
        path: "contact",
        Component: <Contact></Contact>,
      },
      {
        path: "login",
        Component: <Login></Login>,
      },
      {
        path: "register",
        Component: <Register></Register>,
      },
    ],
  },
]);

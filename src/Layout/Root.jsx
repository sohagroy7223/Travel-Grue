import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Loading from "../Page/Loading";

const Root = () => {
  const { state } = useNavigation();
  // console.log(navigation);

  return (
    <div className="w-11/12 mx-auto py-2 space-y-15  ">
      <Navbar></Navbar>
      {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Root;

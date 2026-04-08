import React from "react";
import { useLoaderData } from "react-router";
import Hotel from "./Hotel";

const Package = () => {
  const data = useLoaderData();

  return (
    <div>
      <h4 className="text-2xl font-bold">
        {" "}
        some travel Hotels package here {data.length}
      </h4>
      {data.map((hotel) => (
        <Hotel key={hotel.id} hotel={hotel}></Hotel>
      ))}
    </div>
  );
};

export default Package;

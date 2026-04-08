import React from "react";
import { useLoaderData } from "react-router";

const Package = () => {
  const data = useLoaderData();

  return (
    <div>
      <h4>all package here {data.length}</h4>
    </div>
  );
};

export default Package;

import React from "react";
import { useLoaderData } from "react-router";
import Massage from "./Massage";

const Testimonial = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>all Testimonial here {data.length}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((massage) => (
          <Massage key={massage.id} testimonial={massage}></Massage>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

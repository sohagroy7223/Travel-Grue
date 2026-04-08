import React from "react";
import { FaStar } from "react-icons/fa";

const Massage = ({ testimonial }) => {
  const { image, name, location, comment, rating } = testimonial;
  return (
    <div className="border rounded-lg p-3 space-y-2">
      <div className="flex gap-4">
        <img className="w-15 rounded-full" src={image} alt="user" />
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-base-200">{location}</p>
        </div>
      </div>
      <p>{comment}</p>
      <p className="flex gap-2 items-center">
        <FaStar className="text-yellow-500"></FaStar>
        {rating}
      </p>
    </div>
  );
};

export default Massage;

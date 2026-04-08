import React from "react";
import { FaStar } from "react-icons/fa";

const Hotel = ({ hotel }) => {
  console.log(hotel);
  return (
    <div className="md:flex   space-y-3  items-center gap-3 ">
      {/* img */}
      <img
        className="w-full md:w-120 h-48 bg-cover rounded-lg "
        src={hotel.image}
        alt=""
      />
      <div className="space-y-2 border  p-4 rounded-2xl">
        <h3 className="text-2xl font-bold">{hotel.title}</h3>
        <div className="flex text-base-200 gap-3.5 ">
          <p>{hotel.guests}Guests</p>
          <p>{hotel.bedrooms}Bedrooms</p>
          <p> {hotel.beds}Beds</p>
          <p>{hotel.baths}Baths</p>
        </div>
        <p>Air conditional kitchen</p>
        <p>Cancellation fixiblelity available</p>
        <div className="flex items-center justify-between px-5">
          <p className="flex items-center gap-1.5">
            {" "}
            <FaStar className="text-yellow-500"></FaStar>
            {hotel.rating}
          </p>
          <p>${hotel.price_per_night}/par Night</p>
        </div>
      </div>
    </div>
  );
};

export default Hotel;

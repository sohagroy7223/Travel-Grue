import React from "react";
import { FaStar } from "react-icons/fa";

const Hotel = ({ hotel }) => {
  //   console.log(hotel);
  return (
    <div className="md:flex mt-5 space-y-2 justify-center items-center gap-3 ">
      {/* img */}
      <img
        className="w-full md:w-120 h-62 mt-2 bg-cover rounded-lg "
        src={hotel.image}
        alt=""
      />
      <div className="space-y-2 border p-4 rounded-lg">
        <h3 className="text-2xl font-bold">{hotel.title}</h3>
        <div className="flex text-base-200 gap-3.5 ">
          <p>{hotel.guests} Guests</p>
          <p>{hotel.bedrooms} Bedrooms</p>
          <p> {hotel.beds} Beds</p>
          <p>{hotel.baths} Baths</p>
        </div>
        <p>Air conditional kitchen</p>
        <p>Cancellation fixiblelity available</p>
        <div className="flex items-center justify-between px-4">
          <p className="flex items-center gap-1.5">
            {" "}
            <FaStar className="text-yellow-500"></FaStar>
            {hotel.rating}(12)
          </p>
          <p>${hotel.price_per_night}/par Night</p>
        </div>
        <span className=" flex justify-center mt-4">
          <button className="btn bg-primary text-base-100 ">Book Now</button>
        </span>
      </div>
    </div>
  );
};

export default Hotel;

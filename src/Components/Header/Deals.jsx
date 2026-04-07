import React from "react";

const Deals = () => {
  return (
    <div className="mt-15">
      <div className="text-center">
        <h2 className="md:text-3xl text-2xl font-bold">Why Choose Us</h2>
        <p className="text-base-200 mt-3">
          Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra
          odio sit <br></br> Sodales dictumst nec nibh pellentesque.
        </p>
      </div>
      <div
        className="hero md:h-100 mt-8 h-90 rounded-lg col-span-5"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/vvjhm3pw/Group-39.png)",
        }}
      >
        <div className=" bg-white/70 backdrop-blur-[2px] absolute border p-5 space-y-3 md:ml-120 md:mt-1 w-80 md:w-120 rounded-2xl ">
          <div className="flex items-center gap-2  ">
            <div className="flex items-center">
              <img
                className="w-5"
                src="https://img.icons8.com/?size=100&id=84306&format=png&color=000000"
                alt=""
              />
              <p>7 Day / 6 Night</p>
            </div>
            <div className="flex gap-2">
              <img
                className="w-5"
                src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000"
                alt=""
              />
              <p>Malaysia</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold">Tour To Satorini </h2>
          <p>
            Amet consectetur. Vulputate commodo felis molestie risus ornare
            nulla amet et. Libero commodo sagittis dignissim adipiscing quis.
            Habitant adipiscing.
          </p>
          <h3 className="text-2xl font-bold text-primary">
            price: $1300-$1500
          </h3>
          <button className="btn text-base-100 bg-primary">Book Now</button>
        </div>
      </div>

      {/*  */}

      <div
        className="hero md:h-100 mt-8 h-90 rounded-lg col-span-5"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/cKCNmdnS/Group-40.png)",
        }}
      >
        <div className=" bg-white/70 backdrop-blur-[2px] absolute border p-5 space-y-3 md:-ml-120 md:mt-1 w-80 md:w-120 rounded-2xl ">
          <div className="flex items-center gap-2  ">
            <div className="flex items-center">
              <img
                className="w-5"
                src="https://img.icons8.com/?size=100&id=84306&format=png&color=000000"
                alt=""
              />
              <p>7 Day / 6 Night</p>
            </div>
            <div className="flex gap-2">
              <img
                className="w-5"
                src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000"
                alt=""
              />
              <p>Switzerland</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold">Tour To Satorini </h2>
          <p>
            Amet consectetur. Vulputate commodo felis molestie risus ornare
            nulla amet et. Libero commodo sagittis dignissim adipiscing quis.
            Habitant adipiscing.
          </p>
          <h3 className="text-2xl font-bold text-primary">
            price: $1300-$1500
          </h3>
          <button className="btn text-base-100 bg-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Deals;

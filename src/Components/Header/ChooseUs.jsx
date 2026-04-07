import React from "react";

const ChooseUs = () => {
  return (
    <div className=" mt-15">
      <div className="text-center">
        <h2 className="md:text-3xl text-2xl font-bold">Why Choose Us</h2>
        <p className="text-base-200 mt-3">
          Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra
          odio sit <br></br> Sodales dictumst nec nibh pellentesque.
        </p>
      </div>
      <div className=" md:flex gap-3 mt-8">
        <div className="bg-[#FBB56310] space-y-3 max-w-md md:max-w-full mx-auto mt-3 p-3 border rounded-lg">
          <img
            className="w-12 "
            src="https://img.icons8.com/?size=100&id=erij6mQoTRbv&format=png&color=000000"
            alt=""
          />
          <h3 className=" text-xl font-bold">Handpicked Hotels</h3>
          <p>
            Amet consectetur. Vulputate commodo felis molestie risus ornare
            nulla amet et. Libero commodo sagittis dignissim adipiscing quis.
            Habitant adipiscing risus natoque aliquet.{" "}
          </p>
        </div>
        <div className="bg-[#29CEF620] space-y-3 max-w-md md:max-w-full mx-auto mt-3 p-3 border rounded-lg">
          <img
            className="w-12 "
            src="https://img.icons8.com/?size=100&id=oSiaLLmBOQLs&format=png&color=000000"
            alt=""
          />
          <h3 className=" text-xl font-bold">World Class Service</h3>
          <p>
            Amet consectetur. Vulputate commodo felis molestie risus ornare
            nulla amet et. Libero commodo sagittis dignissim adipiscing quis.
            Habitant adipiscing risus natoque aliquet.{" "}
          </p>
        </div>
      </div>
      <div className="bg-[#FBB56310] space-y-3 max-w-md mx-auto mt-3 p-3 border rounded-lg">
        <img
          className="w-12 "
          src="https://img.icons8.com/?size=100&id=112793&format=png&color=000000"
          alt=""
        />
        <h3 className=" text-xl font-bold">Best Price Guarantee</h3>
        <p>
          Amet consectetur. Vulputate commodo felis molestie risus ornare nulla
          amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant
          adipiscing risus natoque aliquet.{" "}
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;

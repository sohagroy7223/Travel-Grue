import React from "react";

const Place = () => {
  return (
    <div className="mt-12 text-center">
      <h2 className="md:text-3xl text-2xl font-bold">
        Choose Your Destination
      </h2>
      <p className="text-base-200 mt-3">
        Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio
        sit <br></br> Sodales dictumst nec nibh pellentesque.
      </p>
      <div className="md:grid md:grid-cols-12 space-y-3 gap-3 mt-8">
        <div
          className="hero md:h-70 h-40 rounded-lg col-span-6"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/cXbGfS2Y/Rectangle-5.png)",
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <h1 className="mb-5 text-3xl font-bold">Maldives</h1>
          </div>
        </div>
        <div
          className="hero md:h-70 h-40 rounded-lg col-span-6"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/Qvy8PfB1/Rectangle-8.png)",
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <h1 className="mb-5 text-3xl font-bold">Indonesia</h1>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-12 space-y-3 gap-3 ">
        <div className="col-span-4"></div>
        <div
          className="hero md:h-70 h-40 rounded-lg col-span-5"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/NgHvTzq0/Rectangle-7.png)",
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <h1 className="mb-5 text-3xl font-bold">North America</h1>
          </div>
        </div>
        <div
          className="hero md:h-70 h-40 rounded-lg col-span-3"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/zWXpZx1z/Rectangle-9.png)",
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <h1 className="mb-5 text-3xl font-bold">Kashmir</h1>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-12 space-y-3 gap-3 mt-3 md:mt-0">
        <div
          className="hero md:h-70 h-40 rounded-lg col-span-5 "
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/SDjgqrkc/Rectangle-11.png)",
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <h1 className="mb-5 text-3xl font-bold">Bangladesh</h1>
          </div>
        </div>
        <div
          className="hero md:h-70 h-40 rounded-lg col-span-7"
          style={{
            backgroundImage:
              "url(https://i.ibb.co.com/0R92fmhz/Rectangle-10.png)",
          }}
        >
          <div className="hero-content text-neutral-content text-center">
            <h1 className="mb-5 text-3xl font-bold">Bandarban</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;

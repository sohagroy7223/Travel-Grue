import React from "react";

const NewsLetter = () => {
  return (
    <div className="mt-15 md:flex items-center  gap-3 space-y-3">
      <div className="md:w-6/12 border-2 border-primary rounded-2xl p-5 space-y-3 ">
        <h3 className="text-2xl font-bold">Newsletter</h3>
        <p className="text-base-200">
          Get your daily dose of travel news & tips. Sign up today!
        </p>
        <hr className="btn-dash mt-4 mb-5" />
        <input
          className="bg-gray-200 p-2.5 w-full rounded-lg"
          type="text"
          placeholder="Enter your name"
        />{" "}
        <br />
        <input
          className="bg-gray-200 p-2.5 w-full rounded-lg"
          type="email"
          placeholder="Enter your email"
          name="email"
          id=""
        />{" "}
        <br />
        <button className="btn w-full bg-primary text-white">Subscribe</button>
      </div>
      <div
        className="hero md:h-82 relative h-90 rounded-lg "
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/g2TfT0N/Rectangle-8-1.png)",
        }}
      >
        <div className="bg-primary text-base-100  p-5 rounded-lg text-center mt-46 md:ml-113">
          <p>travel.com</p>
          <h3 className="text-2xl font-bold ">Save up to 70%</h3>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

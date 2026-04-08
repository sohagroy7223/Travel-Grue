import React from "react";

const VideoPlace = () => {
  return (
    <div className="md:flex gap-3 mt-15 space-y-3">
      <div className="space-y-2.5">
        <h2 className="text-2xl font-bold">
          A Simple Perfect Place To Get Lost
        </h2>
        <p className="text-base-200">
          Amet consectetur. Vulputate commodo felis molestie risus ornare nulla{" "}
          <br />
          amet et. Libero commodo sagittis dignissim adipiscing quis.{" "}
        </p>
        <ul className="space-y-3 p-3">
          <li>
            <b> 1. </b>Adipiscing ornare pellentesque mauris volutpat tortor{" "}
            <br />
            vitae platea porta lacus. Lectus suspendisse nullam.
          </li>
          <li>
            <b>2.</b> Adipiscing ornare pellentesque mauris volutpat tortor{" "}
            <br />
            vitae platea porta lacus. Lectus suspendisse nullam.
          </li>
        </ul>
        <button className="btn bg-primary text-white">See More</button>
      </div>
      <iframe
        className="rounded-2xl lg:w-140 md:w-450 mx-auto"
        // md:width="560"
        // width="350"
        md:height="315"
        height="250"
        src="https://www.youtube.com/embed/1LWDqve_Atc?si=Qwuw1GV18J0IsUcV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlace;

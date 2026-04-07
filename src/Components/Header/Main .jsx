import React from "react";
import mount from "../../assets/Rectangle 4.png";

const Main = () => {
  return (
    <div>
      <div className="md:flex gap-4 mt-12 ">
        <div className="space-y-2 p-2.5">
          <h3 className="text-3xl font-bold">Our Popular Tours</h3>
          <p>
            Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra
            odio sit massa. Sodales dictumst nec nibh pellentesque.
          </p>
          <ol className="p-3">
            <li>
              <b>1.</b> Tempus euismod lacus mauris dignissim quis inlitrices.
              Magna nullam odio neque diam. Sociis erat at .
            </li>
            <li>
              <b> 2.</b> Adipiscing ornare pellentesque mauris volutpat tortor
              vitae platea porta lacus. Lectus suspendisse nullam.
            </li>
            <li>
              <b> 3.</b> Accumsan eget et turpis praesent lorem egestas enim
              elit bibendum. Risus at in.
            </li>
          </ol>
          <p>
            Amet consectetur. Vulputate commodo felis molestie risus ornare
            nulla amet et. Libero commodo sagittis dignissim adipiscing quis.
            Habitant adipiscing risus natoque aliquet. Id bibendum nunc senectus
            semper tincidunt.{" "}
          </p>
        </div>
        <div>
          <img className="w-235" src={mount} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;

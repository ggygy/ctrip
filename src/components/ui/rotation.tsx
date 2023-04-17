"use client";
import React from "react";
import { Carousel } from "antd";
import { rorationData } from "../../../public/data/rotation";
const Rotation: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    // <div className="rounded-lg">
    <Carousel
      afterChange={onChange}
      autoplay={false}
      className="my-5 rounded-lg"
    >
      {rorationData.map((i, index) => {
        return (
          <a href={i.link} key={index} className="rounded-lg">
            <img src={i.url} alt={i.alt} className="rounded-lg" />
            {/* <Image
              alt=""
              src="https://contents.ctrip.com/activitysetupapp/mkt/index/pcchaosan"
              width={200}
              height={100}
            /> */}
          </a>
        );
      })}
    </Carousel>
    // </div>
  );
};

export default Rotation;

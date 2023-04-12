"use client";
import React from "react";
import { Carousel } from "antd";
import { rorationData } from "./data/rotation";
const Rotation: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    // <div className="rounded-lg">
    <Carousel afterChange={onChange} autoplay={true} className="rounded-lg">
      {rorationData.map((i, index) => {
        return (
          <a href={i.link} key={index}>
            <img src={i.url} alt={i.alt} />
          </a>
        );
      })}
    </Carousel>
    // </div>
  );
};

export default Rotation;

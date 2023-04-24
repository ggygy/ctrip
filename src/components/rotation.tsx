"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "antd";
import { rorationData } from "../../public/data/rotation";

const Rotation: React.FC = () => {
  return (
    <Carousel autoplaySpeed={5000} autoplay={true} className="my-5 ">
      {rorationData.map((i, index) => {
        return (
          <a href={i.link} key={index} className="rounded-lg">
            <Image
              alt={i.alt}
              src={i.url}
              width={740}
              height={100}
              className="rounded-lg"
            />
          </a>
        );
      })}
    </Carousel>
  );
};

export default Rotation;

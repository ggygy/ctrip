"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "antd";
import { rorationData } from "../../public/data/rotation";

const Rotation: React.FC = () => {

  return (
    <Carousel
      autoplaySpeed={5000}
      autoplay={true}
      className="my-5 rounded-lg"
    >
      {rorationData.map((i, index) => {
        return (
          <a href={i.link} key={index} className="rounded-lg">
            <Image
              alt={i.alt}
              src={i.url}
              width={740}
              height={90}
            />
          </a>
        );
      })}
    </Carousel>
  );
};

export default Rotation;

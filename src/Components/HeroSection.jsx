import React from "react";
import { Carousel } from "flowbite-react";

const HeroSection = ({ mydata }) => {
  const { name } = mydata;
  return (
    <>
     <div className="mt-1 h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slide={false} href="../Pages/Products">
    <img
      className="w-full"
      src="https://source.unsplash.com/bRq7Cfn7zDs/1800x1600"
      alt="Image NotFound"
    />
    <img
      className="w-full"
      src="https://source.unsplash.com/qDHwqQ05pVQ/1500x1000"
      alt="Image NotFound"
    />
    <img
      className="w-full"
      src="https://source.unsplash.com/y0_vFxOHayg/1500x1000"
      alt="Image NotFound"
    />
    <img
      className="w-full"
      src="https://source.unsplash.com/y1yQQmozTBw/1200x800"
      alt="Image NotFound"
    />
    <img
      className="w-full"
      src="https://source.unsplash.com//nHsXs9FgIsk/1900x1200"
      alt="Image NotFound"
    />
  </Carousel>
</div>

    </>
  );
};

export default HeroSection;

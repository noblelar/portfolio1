import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TypeWriter from "../typewriter/typewriter";
import { IHiMessage } from "../utils/type";
import Slider1 from "../slider/slider";

const Homepage = () => {
  return (
    <section className=" bg-black/90 h-[70vh] ">
      <div className=" container m-auto ">
        <div className=" text-center ">
          <Slider1 />
          <div> I am Noble Ackor </div>
          <div>
            A Full stuck Developer Specialised in: MERN Stuck and .NET C#
          </div>
        </div>
      </div>
      <div className=" container m-auto ">
        <div className=" flex ">
          <div>
            <Image
              // className="pt-2"
              className=""
              src={"/images/my_image_hd.png"}
              alt="My image"
              width={400}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;

import Image from "next/image";
import React from "react";

import Slider1 from "../slider/slider";

const Homepage = () => {
  return (
    <section className=" bg-black/90 h-[90vh] ">
      <div className=" container m-auto ">
        <div className=" text-center py-[10vh] ">
          <div>
            <div className=" font-tegomin ">
              <Slider1 />
            </div>
            <div className=" font-mulish text-[2rem] ">
              I&apos;m <br />{" "}
              <span className=" font-bold text-[3.5rem]   ">Noble Ackor</span>
            </div>
            <div className=" font-playfair text-[1.4rem] ">
              <div className="  ">A Software Engineer</div>
              <span className=" font-tegomin text-[2rem] ">&</span>
              <div>A Renewable Energy Engineer</div>
            </div>
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

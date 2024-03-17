import Image from "next/image";
import React from "react";

import Slider1 from "../slider/slider";

const Homepage = () => {
  return (
    <section className=" bg-black/90 h-[90vh] ">
      {/* Introduction  */}
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

      {/* Picture and Motivational quote */}
      <div className=" container m-auto ">
        <div className=" grid grid-cols-2 max-md:grid-cols-1 ">
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
          <div>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  The most certain way to succeed is to always try one more
                  time.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;

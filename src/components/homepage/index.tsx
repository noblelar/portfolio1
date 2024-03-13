import Image from "next/image";
import React from "react";

const Hithere = [
  {
    part1: "Console",
    part2: "log",
    part3: "(",
    part4: ")",
  },
  {
    part1: "Console",
    part2: "WriteLine",
    part3: "(",
    part4: ")",
  },
  {
    part1: "Console",
    part2: "log",
    part3: "(",
    part4: ")",
  },
];

const Homepage = () => {
  return (
    <section className=" bg-black/90 h-[70vh] ">
      <div className=" container m-auto ">
        <div className=" text-center ">
          <div>
            <span className=" text-[#d66972] ">{Hithere[0].part1}</span>.
            <span className=" text-[#55b2be] ">{Hithere[0].part2}</span>
            <span className=" ">{Hithere[0].part3}</span>
            <span className=" text-[#8cb372] ">
              {'"'}Hi There ! {'"'}
            </span>
            <span className=" ">{Hithere[0].part4}</span> ;
          </div>
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

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import TypeWriter from "../typewriter/typewriter";
import { IHiMessage } from "../utils/type";

const Hithere: IHiMessage[] = [
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

const hello = [
  Hithere.map((hi, h) => {
    return (
      <div key={h}>
        <span className=" text-[#d66972] ">{hi.part1}</span>.
        <span className=" text-[#55b2be] ">{hi.part2}</span>
        <span className=" ">{hi.part3}</span>
        <span className=" text-[#8cb372] ">
          {'"'} Hi There ! {'"'}
        </span>
        <span className="">{hi.part4}</span>;
      </div>
    );
  }),
];

const Homepage = () => {
  return (
    <section className=" bg-black/90 h-[70vh] ">
      <div className=" container m-auto ">
        <div className=" text-center ">
          {Hithere.map((hi, h) => {
            return <TypeWriter typeMess={hi} key={h} />;
          })}

          <Typewriter
            words={["<span>Eat</span>", "Sleep", "Code", "Repeat!"]}
            // words={hello}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={130}
            deleteSpeed={100}
            delaySpeed={2000}
            // onLoopDone={handleDone}
            // aonType={handleType}
          />
          <div>
            <span className=" text-[#d66972] ">{Hithere[0].part1}</span>.
            <span className=" text-[#55b2be] ">{Hithere[0].part2}</span>
            <span className=" ">{Hithere[0].part3}</span>
            <span className=" text-[#8cb372] ">
              {'"'} Hi There ! {'"'}
            </span>
            <span className="">{Hithere[0].part4}</span>;
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

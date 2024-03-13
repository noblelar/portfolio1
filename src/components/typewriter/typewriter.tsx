import Typewriter from "typewriter-effect";

import React from "react";

const TypeWriter = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span className=" text-[#d66972] ">{Hithere[0].part1}</span>.
            <span className=" text-[#55b2be] ">{Hithere[0].part2}</span>
            <span className=" ">{Hithere[0].part3}</span>
            <span className=" text-[#8cb372] ">
              {'"'} Hi There ! {'"'}
            </span>
            <span className="">{Hithere[0].part4}</span>;`
            )
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriter;

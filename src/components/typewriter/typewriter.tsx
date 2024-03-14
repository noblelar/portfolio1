import Typewriter from "typewriter-effect";

import React from "react";
import { IHiMessage } from "../utils/type"; 

const TypeWriter = ({ typeMess }: { typeMess: IHiMessage }) => {
  return (
    <div>
      <Typewriter
        options={{
          strings: [""],
          loop: true,
          wrapperClassName : " hi-there",
          cursorClassName: " hi-there hi-there-cursor "
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span className=" !text-[#d66972] " style="color:#d66972;">${typeMess.part1}</span>${typeMess.part2? "." : ""}<span className=" text-[#55b2be] " style="color:#55b2be;" >${typeMess.part2}</span><span className=" ">${typeMess.part3}</span><span className=" text-[#8cb372] " style="color:#8cb372;">" Hi There ! "</span><span className="">${typeMess.part4}</span>;`
            )
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2000)
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

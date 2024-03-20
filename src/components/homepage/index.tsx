import Image from "next/image";
import React from "react";

import Slider1 from "../slider/slider";
import Link from "next/link";

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
          <div className=" flex items-center justify-center ">
            <Image
              className=""
              src={"/images/my_image_hd.png"}
              alt="My image"
              width={400}
              height={400}
              quality={100}
            />
          </div>
          <div className=" flex justify-center items-center m-auto max-lg:my-8 w-full ">
            <div className="relative flex mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl justify-center items-center lg:w-[90%] max-lg:mx-4 ">
              <div className="p-6 m-auto ">
                <h5 className="block mb-2 font-playfair  font-semibold leading-snug tracking-normal text-blue-gray-900 lg:text-[3rem] text-justify italic text-[1.4rem] ">
                  The most certain way to succeed is to always <br />
                  <p className=" text-center w-full font-bold py-4 ">
                    &#34; try one more time &#34;
                  </p>
                </h5>
                <p className=" text-right p-4 pt-0 italic text-[1.2rem] max-lg:text-[1rem] ">
                  ~ Thomas Edison
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Session */}
      <div className=" bg-black/85   ">
        <div className=" container m-auto lg:h-[70vh] lg:p-4 max-lg:py-8 ">
          <div className=" m-auto ">
            <div className=" flex items-center justify-center space-x-6">
              <Link href={""} target="_blank">
                <Image
                  className=""
                  src={"/images/twitter-brands.svg"}
                  alt="My image"
                  width={40}
                  height={40}
                  quality={100}
                />
              </Link>
              <Link href={""} target="_blank">
                <Image
                  className=""
                  src={"/images/linkedin-brands.svg"}
                  alt="My image"
                  width={40}
                  height={40}
                  quality={100}
                />
              </Link>

              <Link href={""} target="_blank">
                <Image
                  className=""
                  src={"/images/envelope-open-regular.svg"}
                  alt="My image"
                  width={40}
                  height={40}
                  quality={100}
                />
              </Link>
              <Link href={""} target="_blank">
                <Image
                  className=""
                  src={"/images/github-brands.svg"}
                  alt="My image"
                  width={40}
                  height={40}
                  quality={100}
                />
              </Link>
              <Link href={""} target="_blank">
                <Image
                  className=""
                  src={"/images/instagram-brands.svg"}
                  alt="My image"
                  width={40}
                  height={40}
                  quality={100}
                />
              </Link>
            </div>
          </div>
          <h2 className=" m-auto text-center font-playfair font-bold text-[2rem] ">
            ABOUT
          </h2>
          <div className=" grid grid-cols-2 lg:space-x-4 max-lg:space-y-8 max-lg:grid-cols-1 ">
            <div className=" justify-center items-center text-justify p-4 text-[1.4rem] text-white/70 ">
              <h3 className=" font-tegomin font-bold italic text-[1.7rem]  text-white/90 ">
                Dream Big
              </h3>
              In the realm of digitalization, where every line of code weaves
              the fabric of our future, and every innovative idea ignites the
              beacon of progress, I am thrilled to cast my own light on the
              horizons of Technology. With a solid background in Renewable
              Energy Engineering and skill set on Software Engineering, I am
              clearly a man on a missioin, and here to spark a digital
              revolution.
            </div>
            <div className=" justify-center items-center text-justify p-4 text-[1.4rem] text-white/70 ">
              <h3 className=" font-tegomin font-bold italic text-[1.7rem]  text-white/90 ">
                My Journey
              </h3>
              Being driven by an inner zeal, I conquered a lot on my own. Yes. I
              enjoyed my <b>Self-Taught</b> web-development Journey. Upon
              starting my BSc in Renewable Energy Engineering with my
              skyrocketing inquisitivity, I challenged myself with the learning
              of a programing Languague after following industry trends and
              realising how fast various Engineering field are been Digitised
              with AI integration in recent years. I can proudly say that I
              thrive in my challenge.
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;

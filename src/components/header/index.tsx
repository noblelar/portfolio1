import Link from "next/link";
import React from "react";
import { MenuToggle } from "../mobilenav/MenuToggle";
import AppNav from "../mobilenav/app";

const Header = () => {
  return (
    <section className=" bg-black shadow-2xl  ">
      <div className="container m-auto">
        <div className="flex justify-between items-center p-2 ">
          <div className=" h-[5rem] w-[5rem] bg-black text-center items-center rounded-full ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              // className="pt-2"
              className="max-h-[57px] m-auto pt-3"
              src={"/images/nobleman_logo.svg"}
              alt=""
              // width={230}
              // height={57}
              // quality={100}
            />
          </div>

          <div className=" text-white text-[1.3rem] ">
            <Link href={"#"}>
              <p className=" m-auto text-center text-[2rem] ">&#x1F44B;</p>
              <p>Welcome</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className=" text-white/70 text-[1.1rem] max-lg:hidden ">
            <div className=" space-x-8 ">
              <Link href={"#"} className=" hover:text-[1.2rem] hover:text-white "> About Me </Link>
              <Link href={"#"} className=" hover:text-[1.2rem] hover:text-white "> Projects </Link>
              <Link href={"#"} className=" hover:text-[1.2rem] hover:text-white "> Resume </Link>
              <Link href={"#"} className=" hover:text-[1.2rem] hover:text-white "> Contact </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className=" lg:hidden ">
            {/* <MenuToggle/> */}
            <AppNav/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Header;

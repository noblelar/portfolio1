"use client";
// import { menuItems } from "@/components/utils";
// import NavBut from "../navigation/navbut";
import Link from "next/link";
import Image from "next/image";
import { MenuToggle } from "./MenuToggle";
import { useState } from "react";

export function Menu({ toggle }: any) {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu text-center ">
      {/* ========Logo Area ====== */}
      <div className="flex items-center justify-between font-opensans mx-4 border-b-backgroundColor  md:max-lg:mx-8 ">
        <div className="flex justify-center items-center ">
          <Link href={"/"}>
            <div className=" w-[70px] md:w-[100px] m-auto">
              <Image
                className="pt-2 m-auto text-center "
                src={"/images/nobleman_logo.svg"}
                alt=""
                width={120}
                height={120}
                quality={100}
              />
            </div>
          </Link>
        </div>
        <div className={" ml-[3rem] "}>
          <MenuToggle toggle={toggle} />
        </div>
      </div>

      <ul className=" text-backgroundColor m-auto flex flex-col justify-center items-center h-[70vh] mt-[rem] text-white space-y-4 text-[1.5rem]  ">
        <li>
          <Link href={"#"} className=" hover:text-[1.2rem] hover:text-white ">
            About Me
          </Link>
        </li>
        <li>
          <Link href={"#"} className=" hover:text-[1.2rem] hover:text-white ">
            Projects
          </Link>
        </li>
        <li>
          <Link href={"#"} className=" hover:text-[1.2rem] hover:text-white ">
            Resume
          </Link>
        </li>
        <li>
          <Link href={"#"} className=" hover:text-[1.2rem] hover:text-white ">
            Contact
          </Link>
        </li>
        {/* {menuItems.map((menuItem, i) => {
          if (!menuItem.submenuof) {
            return (
              <NavBut key={i} menu={menuItem} idNumber={i} toggle={toggle} />
            );
          }
        })} */}
      </ul>
    </nav>
  );
}

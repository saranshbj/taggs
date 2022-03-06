import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [open, setOpen] = useState(false);

  return (
    <header className="h-16 w-full md:z-10 drop-shadow-md bg-gradient-to-l from-color2 to-violet-600 md:px-5 px-10 md:relative ">
      {/* Navbar Starts from here */}
      <div
        ref={menuRef}
        className="flex max-w-screen-xl z-10 justify-between items-center h-full mx-auto"
      >
        {/* logo image section */}
        <Link href="/">
          <a className="text-3xl font-poppins font-medium text-white">
            <span className="font-semibold text-white">YT</span>Hub
          </a>
        </Link>
        {/* logo image section ends */}
        {/* Hemburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl h-[35px] w-[40px] md:bg-indigo-500 rounded grid place-content-center cursor-pointer invisible md:visible select-none"
        >
          <Image
            className="select-none"
            src={`/images/${open ? "close.svg" : "open.svg"}`}
            alt="Picture of the author"
            width={38}
            height={33}
          />
        </div>
        {/* Hemburger Ends */}
        {/* Nav Links Starts Here */}
        <ul
          className={`flex space-x-7 select-none top-16 right-0 md:flex-col md:items-center md:space-x-0 md:w-full md:absolute md:bg-indigo-600 md:py-4 md:space-y-3  ${
            open ? "" : "md:top-[-400px]"
          } transition-all`}
        >
          <li className="list">
            <Link href="/">
              <a className="navlink">Home</a>
            </Link>
          </li>
          <li className="list">
            <Link href="#">
              <a className="navlink">How To Use</a>
            </Link>
          </li>
          <li className="list">
            <Link href="/about">
              <a className="navlink">About</a>
            </Link>
          </li>
          <li className="list">
            <Link href="#">
              <a className="navlink">Contact</a>
            </Link>
          </li>
        </ul>
        {/* Navlinks Ends Here */}
      </div>
      {/* Navbar Ends here */}
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import residoLogo from "../../../assets/resido.svg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className={`w-full h-20 fixed top-0 z-50 bg-white`}>
      <header className="relative z-50 md:w-11/12 xl:w-10/12 mx-auto h-full flex items-center">
        <Link
          to="/"
          className={`w-1/12 h-full flex items-center cursor-pointer w-[6rem]`}
        >
          <img
            src={residoLogo}
            alt="resido_logo"
            className={` ${styles.logo_img}`}
          />
        </Link>
        <nav
          className={`flex items-center h-full text-sm text-dark_grey ml-auto
           ${'md:hidden'+ (navbar ? "flex" : "hidden")
            
          }`}
        >
          <ul className="flex lg:flex flex-row items-center justify-evenly gap-1 lg:space-x-3 xl:space-x-5">
            <Link to="/about-us">
              <li className={``}>About us</li>
            </Link>
            <Link to="/service">
              <li>Our services</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
          <Link to="/pricing">
            <Button
              type="filled"
              bgColor="light_blue"
              color="white"
              text="Get started"
              classes="w-[6rem] lg:w-32 h-10 ml-2 lg:ml-5 md:w-28 xl:w-36 rounded-md text-sm capitalize text-dark_grey bg-light_blue"
            />
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

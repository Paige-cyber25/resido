import React from "react";
import styles from "./Navbar.module.scss";
import residoLogo from "../../../assets/resido.svg";
import Button from "../Button/Button";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`w-full h-20 fixed top-0 z-50 bg-white`}>
      <header className="w-11/12 relative z-50 md:w-11/12 xl:w-10/12 mx-auto h-full flex items-center">
        <Link to='/' className={`w-1/12 h-full flex items-center cursor-pointer ${styles.logo}`}>
          <img src={residoLogo} alt="resido_logo" className={`${styles.logo_img}`} />
        </Link>
        <nav className="hidden lg:flex items-center h-full text-sm text-dark_grey ml-auto">
          <ul className="flex lg:space-x-3 xl:space-x-5">
            <Link to='/about-us'>
              <li>About us</li>
            </Link>
            <Link to='/service'>
              <li>Our services</li>
            </Link>
            <Link to='/contact'>
              <li>Contact Us</li>
            </Link>
          </ul>
          <Link to='/pricing'>
          <Button
            type="filled"
            bgColor="light_blue"
            color="white"
            text="Get started"
            classes="w-32 h-10 ml-5 md:w-28 xl:w-36 rounded-md text-sm capitalize text-dark_grey bg-light_blue"
          />
          </Link>
        </nav>
        <div className="flex lg:hidden h-full items-center ml-auto">
              <Bars3Icon className="w-8 h-6" />
        </div>
      </header>
    </div>
  );
};

export default Navbar;

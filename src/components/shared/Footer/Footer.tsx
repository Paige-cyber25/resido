import React from "react";
import styles from "./Footer.module.scss";
import residoLogo from "../../../assets/resido.svg";

const Footer = () => {
  return (
    <div className={`bg-black w-full flex items-center justify-evenly relative -bottom-50`}>
      <div
        className={`w-1/12  flex items-center cursor-pointer ${styles.logo}`}
      >
        <img src={residoLogo} alt="resido_logo" className={styles.logo_img} />
      </div>
      <nav className="hidden lg:flex items-center text-sm">
      <ul className={`text-white text-left ${styles.links}`}>
        <li className='mb-4 font-medium text-base'>Company</li>
        <li className='mb-4 font-medium text-base'>About us</li>
        <li className='mb-4 font-medium text-base'>Pricing</li>
        <div className='flex mb-10'>
        <li className='mr-12 font-medium text-base'>Terms and conditions</li>
        <li className='font-medium text-base'>All rights reserved</li>
        </div>
      </ul>
      </nav>
    </div>
  );
};

export default Footer;

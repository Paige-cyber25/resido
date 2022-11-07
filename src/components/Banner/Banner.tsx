import React from "react";
import Button from "../shared/Button/Button";
import styles from "./Banner.module.scss";
import bannerEllipse from '../../assets/ellipse_banner.svg';
import { HomeBackdrop } from "../customisedIcons/HomeBackdrop";


const Banner = () => {
  return (
    <div className="bg-light_yellow py-20 lg:py-0 px-5 overflow-hidden w-full relative flex flex-col lg:flex-row items-center justify-around ">
        <div className='text-center lg:text-left lg:pt-[117px] pb-20 lg:pb-[150px] z-10'>
          <h2 className={`text-dark_black max-w-[19rem] m-auto lg:mr-auto ${styles.header}`}>
            Quick and easy home management solutions just for you
          </h2>
          <p className={`mb-4 text-dark_black max-w-[589px] m-auto pl-0 lg:pl-[9rem]  ${styles.p}`}>
            Let us care for your home while you focus on your core. Trust us and
            expect your home to get an upgrade with Resido!
          </p>
          <Button
            type="filled"
            bgColor="light_blue"
            color="white"
            text="Get started"
            classes="w-32 h-10 ml-0 lg:ml-[9rem] md:w-28 xl:w-36 rounded-md text-sm capitalize text-dark_grey bg-light_blue"
          />
        </div>
        <div className="z-10">
            <img src={bannerEllipse} alt='ellipse' className={''} />
        </div>
        <div className="absolute hidden lg:block right-0 ">
        <HomeBackdrop />
        </div>
    </div>
  );
};

export default Banner;

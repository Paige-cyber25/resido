import React from "react";
import Button from "../shared/Button/Button";
import styles from "./Banner.module.scss";
import bannerEllipse from '../../assets/ellipse_banner.svg';
import { HomeBackdrop } from "../customisedIcons/HomeBackdrop";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="bg-light_yellow py-20 lg:py-0 px-5 overflow-hidden w-full relative flex flex-col lg:flex-row items-center justify-around lg:pt-[3rem] lg:mt-[43px]">
        <div className='text-center lg:text-left lg:pt-[77px] pb-20 lg:pb-[150px] z-10'>
          <h1 className={`text-dark_black max-w-[37rem] m-auto lg:mr-auto lg:pt-[4rem]  ${styles.header}`}>
            Quick and easy home management solutions just for you
          </h1>
          <p className={`mb-[3rem] text-dark_black max-w-[589px]  pl-0  ${styles.p}`}>
            Let us care for your home while you focus on your core. Trust us and
            expect your home to get an upgrade with Resido!
          </p>
          <Link to="/pricing">
          <Button
            type="filled"
            bgColor="light_blue"
            color="white"
            text="Get started"
            classes="w-32 h-10 ml-0  md:w-28 xl:w-36 rounded-md text-sm capitalize text-dark_grey bg-light_blue"
          />
          </Link>
        </div>
        <div className="z-10">
            <img src={bannerEllipse} alt='ellipse' className={''} />
        </div>
        <div className="absolute hidden lg:block right-0 top-[3.2rem] ">
        <HomeBackdrop />
        </div>
    </div>
  );
};

export default Banner;

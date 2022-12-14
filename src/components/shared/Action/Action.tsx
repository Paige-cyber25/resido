import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from './Action.module.scss';

const Action = () => {
  return (
    <div className={`bg-light_blue w-full h-[13rem] lg:h-[25rem] lg:p-[5rem] ${styles.actionWrapper}`}>
      <h2 className={`mx-auto text-base lg:text-4xl lg:w-[1048px] text-dark_black font-semibold text-center leading-[3rem] lg:leading-[5rem] pt-[2rem] lg:pt-0 ${styles.actionHeader}`}>
        You’re just a click away from your RESIDO experience. Let’s manage your
        home today!
      </h2>
      <div className='text-center hidden lg:block'>
        <Link to='/pricing'>
          <Button
             type="filled"
             bgColor="white"
             color="dark_blue"
             text="Get started"
             classes="w-32 h-10 mt-[3rem] md:w-28 font-medium xl:w-36 rounded-md text-sm capitalize text-dark_blue bg-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default Action;

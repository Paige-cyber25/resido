import React from "react";
import styles from "./OurService.module.scss";
import Carousel from "../../components/shared/Carousel/Carousel";

const OurService = () => {
  return (
    <div>  
      <div className={`bg-light_grey w-full relative pt-[4rem] lg:pt-[10rem] p-[1rem] lg:p-0 ${styles.serviceContainer}`}>
        <h2 className="text-dark_grey font-semibold text-3xl lg:mt-[3rem] mx-auto text-center">
          Our services
        </h2> 
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default OurService;

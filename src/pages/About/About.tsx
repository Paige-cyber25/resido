import React from "react";
import Action from "../../components/shared/Action/Action";
import { Cards } from "../../components/shared/Cards/Cards";
import styles from "./About.module.scss";
import leftAboutUs from "../../assets/about-us-left-image.svg";
import rightAboutUs from "../../assets/about-us-right-image.svg";

const About = () => {
  return (
    <div>
      <div className={`bg-light_grey w-full h-full`}>
        <h2 className="text-dark_grey font-semibold text-3xl mx-auto pt-[10rem] lg:pt-[10rem] text-center">
          About us
        </h2>
        <div
          className={`mt-10 text-light text-base text-dark_grey mx-auto text-center ${styles.aboutContent}`}
        >
          <p className={`px-[2rem] lg:px-0`}>
            RESIDO is a subsidiary of Filmo Facilities Management, a market
            leader in residential and commercial facilities management. We
            provide premium home management services to individuals and
            organisations who want to eliminate the added stress of maintaining
            their home.
          </p>
          <p className={`px-[2rem] lg:px-0 pt-10 text-center`}>
            We do this through our team of highly trained and certified
            technicians. Our services are benchmarked against global home
            management standards. Our clients can expect professional service,
            attention to detail, timely delivery, and transparency from us.
          </p>
          <p className={`px-[2rem] lg:px-0 pt-10 text-center`}>
            We respond swiftly to our clients’ requests - Our technicians report
            on-site within 20-60 minutes of booking. We monitor all jobs from
            our digital control room to ensure excellence is not compromised. We
            ensure that our clients are served without the need for them to
            supervise our work.
          </p>
        </div>
        <div
          className={`bg-light_blue w-3/4 h-1/2 mt-20 mx-auto flex flex-cols lg:flex-row justify-between`}
        >
          <img
            src={leftAboutUs}
            alt="left-about-us"
            className={`max-w-[12rem] lg:max-w-12rem] ${styles.leftImage}`}
          />
          <img
            src={rightAboutUs}
            alt="right-about-us"
            className={`max-w-[12rem] lg:max-w-[33rem] h-3/4 ${styles.leftImage}`}
          />
        </div>
        <div className={`mt-20 mx-auto`}>
          <h2 className="text-dark_grey font-semibold text-3xl pb-10 text-center">
            Our Values
          </h2>
          <p className={`mx-auto font-light text-base text-center ${styles.valueContent}`}>
            We strive to be the very best at what we do. We distinguish
            ourselves through our attentiveness, expertise, and indisputable
            professionalism.
          </p>
        </div>
        <div className={`mt-20 mx-auto`}>
          <h2 className="text-dark_grey font-semibold text-3xl pb-10 text-center">
            Our Mission
          </h2>
          <p className={`mx-auto font-light text-base text-center  ${styles.valueContent}`}>
            Our mission is to provide optimal value to our clients through
            innovative and sustainable solutions that are driven by technology.
          </p>
        </div>
        <div className='mt-20 mb-10'>
          <h2 className="text-dark_grey font-semibold text-3xl text-center">
            Why us
          </h2>
        </div>
        <div className={`pb-32`}>
          <Cards />
        </div>
      </div>
      <div></div>
      <Action />
    </div>
  );
};

export default About;

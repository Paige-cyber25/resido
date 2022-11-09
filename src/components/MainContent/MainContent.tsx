import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./MainContent.module.scss";
import whatsappIcon from "../../assets/whatsapp.svg";
import noteIcon from "../../assets/note.svg";
import searchMonitorIcon from "../../assets/search_monitor.svg";
import lineChartIcon from "../../assets/line-chart.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";
import homeServiceIcon from "../../assets/home_service.svg"
import whiteRightArrow from "../../assets/white_arrow-right.svg";
import storyImage from "../../assets/story.png";
import Button from "../shared/Button/Button";
import { Cards } from "../shared/Cards/Cards"
import Accordion from "../shared/Accordion/Accordion";

const MainContent = () => {
  return (
    <div className={`bg-white w-full p-5 md:p-28 h-full lg:max-h-[3262px] ${styles.mainContentWrapper}`}>
      <h2 className="text-dark_grey font-semibold lg:text-4xl md:text-2xl mb-6 text-center">
        Easy and efficient home management service at your reach
      </h2>
      <p
        className={`text-dark_grey font-light lg:text-xl md:text-sm mx-auto text-center ${styles.subHeader}`}
      >
        We leverage modern technology and a skilled team of home managers to
        keep your home clean and efficient.
      </p>
      <div
        className={`grid mr-auto grid-cols-1 lg:grid-cols-4 mt-20 mb-20 ${styles.gridWrapper}`}
      >
        <div className="mx-auto text-center">
          <img
            src={whatsappIcon}
            alt="whatsapp_icon"
            className="mx-auto rounded-full p-4 bg-light_blue mb-6"
          />
          <h2 className="text-dark_grey font-medium text-xl mb-4">
            Quick Access
          </h2>
          <p className="font-light mb-6 text-base w-64">
            Send us a WhatsApp message and we’ll get to work without delay
          </p>
          <a
            href=" "
            className="flex items-center justify-center gap-2 cursor text-dark_blue font-medium"
          >
            Learn more <img src={arrowRightIcon} alt="arrow_right" />
          </a>
        </div>
        <div className="mt-8 text-center">
          <img
            src={noteIcon}
            alt="note_icon"
            className="mx-auto rounded-full p-4 bg-dark_yellow mb-6"
          />
          <h2 className="text-dark_grey font-medium text-xl mb-4">
            Detailed Inspection
          </h2>
          <p className="font-light mb-6 text-base w-64 mx-auto">
            You don’t need to worry about shoddy jobs. Our managers will conduct
            thorough inspections.
          </p>
          <a
            href=" "
            className="flex items-center justify-center gap-2 cursor text-dark_blue font-medium"
          >
            Learn more <img src={arrowRightIcon} alt="arrow_right" />
          </a>
        </div>
        <div className="text-center">
          <img
            src={searchMonitorIcon}
            alt="search_monitor_icon"
            className="mx-auto rounded-full p-4 bg-peach mb-6"
          />
          <h2 className="text-dark_grey font-medium text-xl mb-4">
            Expert Service
          </h2>
          <p className="font-light mb-6 text-base w-64 mx-auto">
            We employ the services of highly qualified specialists
          </p>
          <a
            href=" "
            className="flex items-center justify-center gap-2 cursor text-dark_blue font-medium"
          >
            Learn more <img src={arrowRightIcon} alt="arrow_right" />
          </a>
        </div>
        <div className="mt-8 text-center">
          <img
            src={lineChartIcon}
            alt="line_chart_icon"
            className="mx-auto rounded-full p-4 bg-light_green mb-6"
          />
          <h2 className="text-dark_grey font-medium text-xl mb-4">
            Proven Track Record
          </h2>
          <p className="font-light mb-6 text-base w-64 mx-auto">
            We have proven ourselves by constantly exceeding our clients’
            expectation.
          </p>
          <a
            href=" "
            className="flex items-center justify-center gap-2 cursor text-dark_blue font-medium"
          >
            Learn more <img src={arrowRightIcon} alt="arrow_right" />
          </a>
        </div>
      </div>
      <div
        className={`mt-28 bg-dark_blue m-auto px-5 ${styles.storyContainer}`}
      >
        <LazyLoadImage
          src={storyImage}
          alt="story"
          className={`hidden lg:block absolute -top-16 ml-8`}
        />
        <div
          className={`text-left ${styles.contentContainer} ml-0 lg:ml-[22rem]`}
        >
          <h2 className={`text-white font-bold pt-12 text-2xl pb-8 `}>
            Our Story
          </h2>
          <p
            className={`text-white font-light text-base mb-4 md:mb-16 ${styles.storyContent}`}
          >
            Resido is a full-service home management company. It is also a
            subsidiary of Filmo Facilities Management Services, a leading
            facility management company with over 25 years of experience in
            Nigeria.
          </p>
          <div className="text-left">
            <Button
              type="filled"
              bgColor="white"
              color="dark_grey"
              text="Learn more"
              classes="w-32 h-10 -mr-40  md:w-28 xl:w-36 rounded-md text-sm capitalize text-dark_grey bg-white"
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h2 className="text-dark_grey font-normal lg:text-4xl md:text-2xl mb-[1rem] text-center">
          Resido
        </h2>
        <p
          className={`text-dark_grey font-light lg:text-xl md:text-sm mx-auto text-center ${styles.residoSubHeader}`}
        >
          Professional and accessible home management services at your
          fingertips.
        </p>
      </div>
      <Cards />
      <div className="flex justify-evenly mt-24">
        <div className="">
          <h2
            className={`text-dark_grey font-semibold text-left mb-[2rem] text-[1.5rem] lg:text-[2.5rem] leading-[1rem]lg:leading-[3rem] lg:mt-[8rem] ${styles.homeServiceHeader}`}
          >
            We will service your home and make it even more habitable{" "}
          </h2>
          <p
            className={`font-light text-xl text-left text-dark_grey ${styles.homeServiceContent}`}
          >
            Say goodbye to frustrating repairmen, pesky pests, untidy living
            spaces, and overgrown hedges. Resido will fix all
          </p>
        </div>
        <div>
          <img
            src={homeServiceIcon}
            alt="home_service_icon"
            className={`hidden lg:block`}
          />
        </div>
      </div>
      <div className={`mt-24`}>
        <h2
          className={`text-center lg:text-center text-dark_grey font-semibold text-xl lg:text-4xl mb-10 lg:mb-20`}
        >
          Frequently Asked Questions
        </h2>
        <div className='flex items-center justify-start'>
            <Accordion />
        </div>
        
        {/* <div className={`flex flex-col lg:flex-row gap-10 mb-8 justify-between`}>
          <div
            className={`flex items-center md:justify-between lg:gap-80 p-5 ${styles.questionsWrapper}`}
          >
            <p className={`text-base`}>Can i get a refund?</p>
            <img src={plusIcon} alt="plus_icon" />
          </div>
          <div
            className={` flex items-center justify-between lg:gap-80 p-5 ${styles.questionsWrapper}`}
          >
            <p className={``}>Do i have a discount?</p>
            <img src={plusIcon} alt="plus_icon" />
          </div>
        </div> */}
        {/* <div className={`flex flex-col lg:flex-row gap-10 mb-8 justify-between`}>
          <div
            className={`flex items-center justify-between lg:gap-80 p-4 ${styles.questionsWrapper}`}
          >
            <p className={``}>How do i subscribe?</p>
            <img src={plusIcon} alt="plus_icon" />
          </div>
          <div
            className={` flex items-center justify-between lg:gap-80 p-4 ${styles.questionsWrapper}`}
          >
            <p className={``}>Are my properties safe?</p>
            <img src={plusIcon} alt="plus_icon" />
          </div>
        </div> */}
        {/* <div className={`flex flex-row`}>
          <div
            className={`flex items-center gap-10 lg:gap-52 p-4 ${styles.questionsWrapper}`}
          >
            <p className={``}>What is your timeline for execution?</p>
            <img src={plusIcon} alt="plus_icon" />
          </div>
        </div> */}
      </div>
      <div className={`mt-24 text-center lg:text-right`}>
        <h2 className={`text-dark_grey font-semibold text-2xl lg:text-4xl mb-4 lg:mb-8`}>
          Could use our service?
        </h2>
        <p
          className={`font-light text-dark_grey text-left lg:float-right lg:mb-8 lg:text-xl ${styles.customerContent}`}
        >
          Send us a quick message and we’ll be where you need us in no time.
        </p>
      </div>
      <form
        className={`mt-24 lg:ml-[20rem] lg:mb-[20rem] ${styles.inputWrapper}`}
      >
        <input
          type="text"
          placeholder="Enter your location"
          className={`mb-[2rem] lg:float-right block ml-auto mr-auto lg:ml-[21rem] p-2 lg:p-4 lg:pr-[10rem] ${styles.input}`}
        />
        <div className={`flex w-full items-center justify-end gap-[1rem]`}>
        <input
          type="text"
          placeholder="Enter your email address"
          className={` block p-[.8rem] lg:p-4 lg:pr-[4rem] ${styles.emailInput}`}
        />
        <div
        className={` block cursor-pointer w-20 lg:h-[3.3rem] p-0.5 ${styles.whiteArrowRightWrapper}`}
      >
        <img
          src={whiteRightArrow}
          alt="white_arrow_right"
          className={`object-none object-center text-center w-6 ${styles.whiteArrowRight}`}
        />
        </div>
        </div>
      </form>
    </div>
  );
};

export default MainContent;

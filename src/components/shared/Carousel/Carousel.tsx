import React from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "./Carousel.module.scss";
import generatorServiceIcon from "../../../assets/generator.svg";
import electricalIcon from '../../../assets/electrical.png';
import plumbingIcon from '../../../assets/plumbing.png';
import swimmingIcon from '../../../assets/swimming.png';
import cleaningIcon from '../../../assets/cleaning.png';
import gardeningIcon from '../../../assets/gardening.png';

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={6}
    >
      <Slider className={`mt-10`}>
        <Slide index={0}>
          <div>
            <div>
              <img
                src={generatorServiceIcon}
                alt="generator-service"
                className={`mx-auto mt-10 ${styles.servicesImage}`}
              />
            </div>
            <div className={`mx-auto mt-20 text-center`}>
              <h2 className={`font-semibold text-dark_black mt-20 text-xl`}>
                Generator servicing
              </h2>
              <p
                className={`mx-auto mt-3 text-center font-light text-xl w-96 lg:w-[50rem]  text-dark_grey`}
              >
                We offer 24 hours generator servicing and repairs for all types
                of generator sets. We replace worn-out parts and carry out
                routine maintenance checks to ensure peak performance always.
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={1}>
          <div>
            <div>
              <img
                src={electricalIcon}
                alt="generator-service"
                className={`mx-auto mt-10 ${styles.servicesImage}`}
              />
            </div>
            <div className={`mx-auto mt-20 text-center`}>
              <h2 className={`font-semibold text-dark_black mt-20 text-xl`}>Electrical servicing & installation</h2>
              <p
                className={`mx-auto mt-3 text-center font-light  text-xl w-96 lg:w-[50rem]  text-dark_grey`}
              >
                We carry out our maintenance and installation of electrical
                units. We also source quality electrical materials for our
                clients at competitive prices and ensure compliance with safety
                standards
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={2}>
          <div>
            <div>
              <img
                src={plumbingIcon}
                alt="generator-service"
                className={`mx-auto mt-10 ${styles.servicesImage}`}
              />
            </div>
            <div className={`mx-auto mt-20 text-center`}>
              <h2 className={`font-semibold text-dark_black mt-20 text-xl`}>Plumbing services</h2>
              <p
                className={`mx-auto mt-3 text-center font-light text-xl w-96 lg:w-[50rem]  text-dark_grey`}
              >
                We perform routine checks and plumbing fixes, engaging
                authorised vendors for quality plumbing materials. We install
                sanitary fixtures, offer water treatment solutions, and other
                plumbing services at competitive prices
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={3}>
          <div>
            <div>
              <img
                src={swimmingIcon}
                alt="generator-service"
                className={`mx-auto mt-10 ${styles.servicesImage}`}
              />
            </div>
            <div className={`mx-auto mt-20 text-center`}>
              <h2 className={`font-semibold text-dark_black mt-20 text-xl`}>Swimming pool maintenance</h2>
              <p
                className={`mx-auto mt-3 text-center font-light text-xl w-96 lg:w-[50rem]  text-dark_grey`}
              >
                We offer swimming pool maintenace services that helps to
                maintenace a hygienic swimming pool. We clear debris, maintain
                PH levels, treat super-chlorinate water, repair leakages, clean
                pool filters and more
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={4}>
          <div>
            <div>
              <img
                src={cleaningIcon}
                alt="generator-service"
                className={`mx-auto mt-10 ${styles.servicesImage}`}
              />
            </div>
            <div className={`mx-auto mt-20 text-center`}>
              <h2 className={`font-semibold text-dark_black mt-20 text-xl`}>Cleaning & fumigation services</h2>
              <p
                className={`mx-auto mt-3 text-center font-light text-xl w-96 lg:w-[50rem]  text-dark_grey`}
              >
                We polish, sanitise, and remove waste, oil and other grimes from
                walls and ceilings. We use non-toxic cleaning products to clean
                and disinfect homes, thus promoting environmental hygiene
              </p>
            </div>
          </div>
        </Slide>
        <Slide index={5}>
          <div>
            <div>
              <img
                src={gardeningIcon}
                alt="generator-service"
                className={`mx-auto mt-10 ${styles.servicesImage}`}
              />
            </div>
            <div className={`mx-auto mt-20 text-center`}>
              <h2 className={`font-semibold text-dark_black mt-20 text-xl`}>Gardening services</h2>
              <p
                className={`mx-auto mt-3 text-center font-light text-xl lg:w-96 lg:w-[50rem]  text-dark_grey`}
              >
                Our gardeners are highly trained to elevate the appeal of any
                home by cultivating well-maintained green fields. We plant,
                fertlise plants, and trim unruly hedges
              </p>
            </div>
          </div>
        </Slide>
      </Slider>
      <div
        className={`flex flex-row justify-center absolute top-[65%] lg:top-[75%] left-[38%] lg:left-[46%]`}
      >
        <Dot slide={0}>
          <div></div>
        </Dot>
        <Dot slide={1}>
          <div></div>
        </Dot>
        <Dot slide={2}>
          <div></div>
        </Dot>
        <Dot slide={3}>
          <div></div>
        </Dot>
        <Dot slide={4}>
          <div></div>
        </Dot>
        <Dot slide={5}>
          <div></div>
        </Dot>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;

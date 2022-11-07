import React from "react";
import phoneIcon from "../../assets/phone.svg";
import mailIcon from "../../assets/mail-icon.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div>
      <div className={`bg-light_grey w-full h-full`}>
        <h2 className="text-dark_grey font-semibold text-3xl mx-auto pt-20 text-center">
          Contact us
        </h2>
        <p className="text-dark_grey font-light text-base mx-auto pt-10 pb-10 text-center">
          Reach out to us and you’ll get a response soon
        </p>
        <div
          className={`flex justify-center items-center cursor-pointer ${styles.iconContactContainer}`}
        >
          <div className={`flex flex-row items-center gap-4 mb-8 `}>
            <img src={phoneIcon} alt="phone" />
            <span className="text-dark_blue font-normal text-base">
              +234895495505
            </span>
          </div>
          <div className={`flex flex-row items-center gap-4 mb-8 `}>
            <img src={mailIcon} alt="mail" />
            <span className="text-dark_blue font-normal text-base">
              hello@resido.com
            </span>
          </div>
          <div className={`flex flex-row items-center gap-4 mb-20`}>
            <img src={whatsappIcon} alt="whatsapp" />
            <span className="text-dark_blue font-normal text-base">
              Whatsapp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

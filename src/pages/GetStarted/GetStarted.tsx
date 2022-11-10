import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./GetStarted.module.scss";
import selectDropDownIcon from "../../assets/select-dropdown.svg";
import Button from "../../components/shared/Button/Button";
import arrowRightIcon from "../../assets/arrow-right.svg";
import suppportIcon from "../../assets/support.svg";
import { registerUser } from "../../API/endpoints/Create";
import NumberWithComma from "../../components/helpers/numberWithComma";
import PaymentModal from "../../components/Modals/PaymentModal";

const GetStarted = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formValues, setFormValues] = useState(null);
  const [currentFormKey, setCurrentFormKey] = useState(0);
  const [formSteps] = useState([
    { name: "housingInfo", index: 0 },
    { name: "personalInfo", index: 1 },
    { name: "summaryInfo", index: 2 },
  ]);
  const renderNextForm = () => {
    setCurrentFormKey(currentFormKey + 1);
  };
  const renderPreviousForm = () => {
    setCurrentFormKey(currentFormKey - 1);
  };
  const [frequencies, setFrequencies] = useState([]);
  const [houseTypes, setHouseTypes] = useState([]);
  const [price, setPrice] = useState<any>({});
  const [showPaymentModal, setShowPaymentModal] = useState<any>(false);
  const [paystackUrl, setPaystackUrl] = useState<string>();

  const isThisForm = (formStepIndex: any) => {
    return currentFormKey === formSteps[formStepIndex].index;
  };

  const locations = [
    { label: "Select location", value: "", disabled: true },
    { label: "Victoria Island", value: "Victoria Island" },
    { label: "Ikoyi", value: "Ikoyi" },
    { label: "Lekki Phase 1", value: "Lekki Phase 1" },
    { label: "Banana Island", value: "Banana Island" },
  ];

  const apartmentTypes = {
    1: "House 7+",
    2: "D/SD House",
    3: "Townhouse",
    4: "3+ Bed Apartment",
  };

  const frequencyOptions = {
    2: "quarterly",
    3: "yearly",
  };

  const openPaymentModal = () => setShowPaymentModal(true);
  const closePaymentModal = () => setShowPaymentModal(false)

  useEffect(() => {
    getFrequency();
    getHouse();
  }, []);

  async function getFrequency() {
    try {
      let request = axios.get(
        `https://resido-onboarding.herokuapp.com/frequency`
      );
      let response = (await request).data;
      if (response) {
        setFrequencies(response.frequencies);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getHouse() {
    try {
      let request = axios.get(`https://resido-onboarding.herokuapp.com/house`);
      let response = (await request).data;
      if (response) {
        setHouseTypes(response.house_types);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getPrice(frequency, house_type) {
    try {
      let request = axios.get(
        `https://resido-onboarding.herokuapp.com/prices/${house_type}/${frequency}`
      );
      let response = (await request).data;
      if (response) {
        setPrice(response.price);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const { handleSubmit, setFieldValue, isValid, values } = useFormik({
    initialValues: {
      house_type: "",
      location: "",
      frequency: "",
      amount: "",
      name: "",
      email: "",
      whatsapp_number: "",
      alt_whatsapp_number: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please input your full name"),
      email: Yup.string()
        .email("Use valid format")
        .required("Please input your email address"),
      address: Yup.string().required("Please input your home address"),
      whatsapp_number: Yup.number().required(
        "Please input your whatsapp number"
      ),
    }),
    async onSubmit(values: any) {
      if (isValid) {
        setFormValues({ ...values });

        let postData = {
          name: values.name,
          email: values.email,
          location: values.location,
          whatsapp_number: values.whatsapp_number,
          alt_whatsapp_number: values.alt_whatsapp_number,
          frequency: values.frequency,
          house_type: values.house_type,
          amount: price.price,
        };
        console.log(postData);
        try {
          const postRes = await registerUser({ params: postData });
          if (postRes.data.user) {
            setPaystackUrl(postRes.data.authorizationUrl);
            openPaymentModal();
          }
        } catch ({ error }) {
          console.error(error);
        }
      }
    },
  });

  const onSubmit = async () => {
    let postData = {
      name: values.name,
      email: values.email,
      location: values.location,
      whatsapp_number: values.whatsapp_number,
      alt_whatsapp_number: values.alt_whatsapp_number,
      frequency: values.frequency,
      house_type: values.house_type,
      amount: price.price,
    };

    try {
      const postRes = await registerUser({ params: postData });
      if (postRes.data.user) {
        setPaystackUrl(postRes.data.authorizationUrl);
        openPaymentModal();
      }
    } catch (error) {
      console.error(error);
    }
  };

  let houseTypeObject: any = Object.assign({}, houseTypes);

  useEffect(() => {
    getPrice(values.frequency, values.house_type);
  }, [values.frequency, values.house_type]);

  const totalAmount = NumberWithComma(price.price);

  const userWhatsappNumber = values.whatsapp_number;

  const userEmail = values.email;
  return (
    <form
      className={`bg-light_grey w-full max-h-[84rem] lg:max-h-[70rem]`}
      onSubmit={handleSubmit}
    >
      {/** Housing Info */}
      {isThisForm(0) && (
        <>
          <div>
            <h2 className="text-dark_grey font-semibold lg:mt-20 px-[2rem] text-xl lg:text-3xl mx-auto pt-[4rem] lg:pt-[4rem] text-center">
              At Resido, we give value for your money
            </h2>
            <p
              className={`text-center text-dark_grey font-light pt-8 text-lg lg:text-xl`}
            >
              Choose a plan, let’s walk you through it.
            </p>

            <div
              className={`mx-[2rem] lg:mx-auto mt-10 h-[23rem] lg:h-[15rem] ${styles.firstWrapper}`}
            >
              <p
                className={`text-center font-normal text-dark_grey pt-4 lg:text-lg `}
              >
                Which of this best describes your home?
              </p>
              <div className="grid grid-cols-2 auto-rows-[0, 2fr] lg:ml-[2rem] lg:gap-[1.75rem]"></div>
              <div
                className={`flex flex-col lg:flex-row w-full justify-center pt-8 ml-[1rem] lg:ml-0`}
              >
                <div className={`w-[85%] lg:w-[45%] ${styles.homeContainer}`}>
                  <div
                    className={`w-[100%] lg:w-[95%] mb-[2rem] lg:mb-0 ${styles.divider}`}
                  >
                    <div className={`p-2 ${styles.inputField}`}>
                      <input
                        type="checkbox"
                        className={`ml-2 lg:ml-6`}
                        name="house_type"
                        value={values.house_type}
                        checked={values.house_type === houseTypeObject?.[0]?.id}
                        onChange={(e) =>
                          setFieldValue("house_type", houseTypeObject?.[0]?.id)
                        }
                      />
                      <label
                        className={`text-dark_grey font-light pl-4 lg:pl-6`}
                      >
                        {houseTypeObject?.[0]?.name}
                      </label>
                    </div>
                  </div>
                </div>
                <div className={`w-[85%] lg:w-[45%] ${styles.homeContainer}`}>
                  <div className={` p-2 w-[100%] ${styles.inputField}`}>
                    <input
                      type="checkbox"
                      className={`ml-2 lg:ml-6`}
                      name="house_type"
                      value={values.house_type}
                      checked={values.house_type === houseTypeObject?.[1]?.id}
                      onChange={(e) =>
                        setFieldValue("house_type", houseTypeObject?.[1]?.id)
                      }
                    />
                    <label className={`text-dark_grey font-light pl-4 lg:pl-6`}>
                      {houseTypeObject?.[1]?.name}
                    </label>
                  </div>
                </div>
              </div>

              <div
                className={`inline-flex flex-col lg:flex-row w-full justify-center pt-8 ml-[1rem] lg:ml-0`}
              >
                <div className={`w-[85%] lg:w-[45%] ${styles.homeContainer}`}>
                  <div
                    className={`w-[100%] lg:w-[95%] mb-[2rem] lg:mb-0 ${styles.divider}`}
                  >
                    <div className={`p-2 ${styles.inputField}`}>
                      <input
                        type="checkbox"
                        className={`ml-2 lg:ml-6`}
                        name="house_type"
                        value={values.house_type}
                        checked={values.house_type === houseTypeObject?.[2]?.id}
                        onChange={(e) =>
                          setFieldValue("house_type", houseTypeObject?.[2]?.id)
                        }
                      />
                      <label
                        className={`text-dark_grey font-light pl-4 lg:pl-6`}
                      >
                        {houseTypeObject?.[2]?.name}
                      </label>
                    </div>
                  </div>
                </div>
                <div className={`w-[85%] lg:w-[45%] ${styles.homeContainer}`}>
                  <div className={` p-2 w-[100%] ${styles.inputField}`}>
                    <input
                      type="checkbox"
                      className={`ml-1 lg:ml-6`}
                      name="house_type"
                      value={values.house_type}
                      checked={values.house_type === houseTypeObject?.[3]?.id}
                      onChange={(e) =>
                        setFieldValue("house_type", houseTypeObject?.[3]?.id)
                      }
                    />
                    <label className={`text-dark_grey font-light pl-4 lg:pl-6`}>
                      {houseTypeObject?.[3]?.name}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`mx-[2rem] lg:mx-auto mt-10 h-[28rem] lg:h-[22rem] ${styles.secondChoiceWrapper}`}
            >
              <p
                className={`text-center font-normal text-dark_grey pt-6 lg:text-lg pb-2 ${styles.borderBottom} `}
              >
                Let us know where you are
              </p>
              <p className={`p-4 font-normal text-dark_grey`}>Select</p>
              <div
                className={`flex flex-col lg:flex-row w-full justify-center`}
              >
                <div className={`w-[85%] lg:w-[45%] ${styles.homeContainer}`}>
                  <div className={`w-[100%] lg:w-[95%] ${styles.divider}`}>
                    <div
                      className={`p-[1rem] lg:p-2 lg:p-6 ml-[2rem] lg:ml-0 mb-[2rem] ${styles.inputField}`}
                    >
                      <label
                        className={`text-dark_grey font-light pl-1 lg:pl-6 mb-4`}
                      >
                        Location
                      </label>
                      <div
                        className={`flex flex-cols lg:flex-row lg:justify-between p-[1rem] lg:p-2 lg:mb-0 lg:p-2 mt-2 cursor-pointer ${styles.inputField}`}
                      >
                        <select
                          name="location"
                          onChange={(e) =>
                            setFieldValue("location", e.target.value)
                          }
                          value={values.location}
                          className={`lg:ml-6 lg:w-96 text-dark_grey bg-light_grey font-light`}
                        >
                          {locations.map((location: any) => {
                            return (
                              <option value={location.value}>
                                {location.label}
                              </option>
                            );
                          })}
                        </select>
                        <img
                          src={selectDropDownIcon}
                          alt="select-drop-down"
                          className={`hidden lg:block`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`w-[85%] lg:w-[45%] ${styles.homeContainer}`}>
                  <div
                    className={`p-[1rem] lg:p-2 lg:p-6 ml-[2rem] lg:ml-0  ${styles.inputField}`}
                  >
                    <label className={`text-dark_grey font-light pl-6 mb-4`}>
                      Frequency
                    </label>
                    <div
                      className={`flex justify-between p-2 mt-2 cursor-pointer ${styles.inputField}`}
                    >
                      <select
                        name="frequency"
                        value={values.frequency}
                        onChange={(e) =>
                          setFieldValue("frequency", e.target.value)
                        }
                        className={`lg:ml-6 lg:w-96 text-dark_grey bg-light_grey font-light capitalize`}
                      >
                        <option value="" defaultChecked>
                          Select frequency
                        </option>
                        {frequencies.map(({ id, name }) => {
                          return (
                            <option key={id} value={id}>
                              {name}
                            </option>
                          );
                        })}
                      </select>
                      <img
                        src={selectDropDownIcon}
                        alt="select-drop-down"
                        className={`hidden lg:block`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className={`p-8 text-yellow font-medium text-[13px] lg:text-[16px]`}>
                **Get 10% discount on a one-year plan
              </p>
            </div>

            <div className={`mt-20 flex items-center justify-between`}>
              <p
                className={`text-left pl-[3rem] lg:pl-64 text-dark_grey font-light text-base lg:text-lg`}
              >
                Total (+ VAT)
              </p>

              <div className="text-right pr-[3rem] lg:pr-64 font-bold bg-light_grey text-dark_grey text-base lg:text-2xl">
                <p className="price">₦ {NumberWithComma(price.price)}</p>
              </div>
            </div>

            <div
              className={`flex items-center justify-end mt-20 pr-[3rem] lg:pr-60 gap-4 pb-8`}
              onClick={renderNextForm}
            >
              <Button
                type="filled"
                bgColor="light_blue"
                color="dark_blue"
                text="Next"
                classes="w-32 h-10 relative md:w-28 xl:w-36 rounded-md text-sm capitalize text-dark_blue bg-light_blue"
              />
              <img
                src={arrowRightIcon}
                alt="arrow-right-icon"
                className={`absolute pr-4`}
              />
            </div>
          </div>
        </>
      )}

      {/** Personal Info*/}
      {isThisForm(1) && (
        <>
          <div className={``}>
            <div className={`flex items-center justify-between`}>
              <h5
                onClick={renderPreviousForm}
                className={`text-left lg:text-left cursor-pointer pl-[3rem] lg:pl-[16rem] pt-10 text-dark_grey text-sm font-medium lg:mt-20 lg:text-base`}
              >
                Back
              </h5>

              <h5
                className={`text-center lg:text-right pr-[2rem] lg:pr-64 pt-10 text-dark_grey font-medium lg:mt-20 text-sm lg:text-base`}
              >
                Fields marked * are compulsory
              </h5>
            </div>

            <div
              className={` mx-[2rem] lg:mx-auto mt-4 lg:mt-2 lg:p-4 lg:mb-[2rem] ${styles.formContainer}`}
            >
              <h4
                className={`text-center lg:mt-4 text-dark_grey font-semibold pt-2 lg:pt-0 pb-2 lg:pb-4 lg:text-xl ${styles.borderBottom}`}
              >
                Personal info
              </h4>

              <div
                className={`mt-8 lg:mt-8 mb-4 lg:mb-8 ml-[1rem] lg:ml-[5rem]`}
              >
                <label className={`mb-8`}>Full name*</label>
                <br />
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={(e) => setFieldValue("name", e.target.value)}
                  placeholder="Enter your full name"
                  className={`mt-4 lg:mt-4 bg-light_grey p-3 lg:w-[49.5rem] ${styles.formInputField}`}
                />
              </div>

              <div className={`lg:mt-8 mb-4 lg:mb-8 ml-[1rem] lg:ml-[5rem]`}>
                <label className={``}>Email*</label>
                <br />
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => setFieldValue("email", e.target.value)}
                  placeholder="Enter your email"
                  className={`mt-4 bg-light_grey p-3 lg:w-[49.5rem] ${styles.formInputField}`}
                />
              </div>

              <div className={`lg:mt-8 mb-4 lg:mb-8 ml-[1rem] lg:ml-[5rem]`}>
                <label className={``}>Home address*</label>
                <br />
                <input
                  type="text"
                  name="home_address"
                  value={values.home_address}
                  onChange={(e) =>
                    setFieldValue("home_address", e.target.value)
                  }
                  placeholder="Enter your home address"
                  className={`mt-4 bg-light_grey p-3 lg:w-[49.5rem] ${styles.formInputField}`}
                />
              </div>

              <div className={`lg:mt-8 mb-4 lg:mb-8 ml-[1rem] lg:ml-[5rem]`}>
                <label className={``}>Whatsapp number*</label>
                <br />
                <input
                  type="number"
                  name="whatsapp_number"
                  value={values.whatsapp_number}
                  onChange={(e) =>
                    setFieldValue("whatsapp_number", e.target.value)
                  }
                  placeholder="+234"
                  className={`mt-4 bg-light_grey p-3 lg:w-[49.5rem] ${styles.formInputField}`}
                />
              </div>

              <div className={`lg:mt-8 mb-4 lg:mb-8 ml-[1rem] lg:ml-[5rem]`}>
                <label className={``}>Alternate Whatsapp number</label>
                <br />
                <input
                  type="number"
                  name="alt_whatsapp_number"
                  value={values.alt_whatsapp_number}
                  onChange={(e) =>
                    setFieldValue("alt_whatsapp_number", e.target.value)
                  }
                  placeholder="+234"
                  className={`mt-4 lg:mt-4 bg-light_grey p-3 lg:mb-10 lg:w-[49.5rem] ${styles.formInputField}`}
                />

                <div
                  className={` mt-8 lg:mt-8 mb-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between`}
                >
                  <a
                    href="https://wa.me/2349043284663"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex gap-2 pl-5 lg:pl-20 pr-[5rem] lg:pr-0 mb-[2rem] lg:mb-0`}
                  >
                    <img src={suppportIcon} alt="support" />
                    <p className={`underline text-dark_blue`}>Get support</p>
                  </a>
                  <div className={`flex items-center pr-10 lg:pr-20 `}>
                    <Button
                      type="filled"
                      bgColor="light_blue"
                      color="dark_blue"
                      onClick={renderNextForm}
                      text="Submit"
                      classes="w-32 h-10 md:w-28 xl:w-36 cursor-pointer rounded-md text-sm capitalize text-dark_blue bg-light_blue"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {isThisForm(2) && (
        <div>
          <div>
            <h5
              onClick={renderPreviousForm}
              className={`text-left lg:text-left cursor-pointer pl-[3rem] lg:pl-[30rem] pt-10 text-dark_grey font-medium lg:mt-20 text-base`}
            >
              Back
            </h5>
            <div
              className={`mx-[2rem] lg:mx-auto mt-2  lg:mt-8 mb-8 ${styles.formContainerSummary}`}
            >
              <div className={`${styles.flexBox} ${styles.headerSummary}`}>
                <h2>Total (Vat Inclusive)</h2>
                <h2 className={`${styles.medium_text_bold}`}>
                  ₦{NumberWithComma(price.price)}
                </h2>
              </div>
              <h2 className={`${styles.medium_text_bold}`}>Breakdown</h2>
              <div>
                <h3 className={`${styles.title_sub_text}`}>Apartment Type</h3>
                <div className={`${styles.flexBox}`}>
                  <p className={`${styles.medium_text}`}>
                    {apartmentTypes[String(values.house_type)]}
                  </p>
                  <p className={`${styles.medium_text}`}>
                    ₦ {NumberWithComma(price.price)}
                  </p>
                </div>
              </div>

              {frequencyOptions[String(values.frequency)] ===
              frequencyOptions["3"] ? (
                <div>
                  <h3 className={`${styles.medium_text}`}>Discount</h3>
                  <div className={`${styles.flexBox}`}>
                    <p className={`${styles.medium_text} ${styles.discount}`}>
                      10% off
                    </p>
                  </div>
                </div>
              ) : null}

              <div className={`${styles.flexBox}`}>
                <p className={`${styles.title_sub_text}`}>Location</p>
                <p className={`${styles.title_sub_text}`}>Home Address</p>
              </div>

              <div className={`${styles.flexBox}`}>
                <p className={`${styles.medium_text}`}>{values.location}</p>
                <p>{values.home_address}</p>
              </div>

              <h4 className={`${styles.title_sub_text}`}>Frequency</h4>
              <h3 className={`capitalize ${styles.medium_text}`}>
                {frequencyOptions[String(values.frequency)]}
              </h3>

              <button
                type="submit"
                onClick={onSubmit}
                className={`${styles.btn_payment}`}
              >
                Pay ₦{NumberWithComma(price.price)}
              </button>
            </div>
          </div>
        </div>
      )}
      <PaymentModal
        {...{ totalAmount, userWhatsappNumber, userEmail, paystackUrl, closePaymentModal }}
        visible={showPaymentModal}
      />
    </form>
  );
};

export default GetStarted;

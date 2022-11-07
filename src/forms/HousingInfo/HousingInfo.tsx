import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./HousingInfo.module.scss";
import Button from "../../components/shared/Button/Button";
import selectDropDownIcon from "../../assets/select-dropdown.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";

const HousingInfo = ({ renderNextForm, formValues, setFormValues, useFormik }: any) => {
  const [frequencies, setFrequencies] = useState([]);
  let validationSchema;

  useEffect(() => {
    getFrequency();
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

  const { handleSubmit, setFieldValue, isValid, values } = useFormik({
    initialValues: {
      house_type: (formValues && formValues.house_type) || "",
      location: (formValues && formValues.location) || "",
      frequency: (formValues && formValues.frequency) || "",
      amount: (formValues && formValues.amount) || "",
    },
    validationSchema: validationSchema,
    onSubmit(values:any) {
      if (isValid) {
        setFormValues({ ...formValues, ...values });
        console.log(formValues);
        renderNextForm();
      }
    },
  });

  console.log(values, "values");
  return (
    <div>
      <h2 className="text-dark_grey font-semibold text-3xl mx-auto pt-10 text-center">
        At Resido, we give value for your money
      </h2>
      <p className={`text-center text-dark_grey font-light pt-8 text-xl`}>
        Choose a plan, let’s walk you through it.
      </p>

      <form onSubmit={handleSubmit}>
        <div className={`mx-auto mt-10 ${styles.firstChoiceWrapper}`}>
          <p className={`text-center font-normal text-dark_grey pt-4 text-lg `}>
            Which of this best describes your home?
          </p>
          <div className={`inline-flex w-full justify-center pt-8`}>
            <div className={`${styles.homeContainer}`}>
              <div className={`${styles.divider}`}>
                <div className={`p-2 ${styles.inputField}`}>
                  <input
                    type="checkbox"
                    className={`ml-6`}
                    name="house_type"
                    value={values.house_type}
                    checked={values.house_type === "flat"}
                    onChange={(e) => setFieldValue("house_type", "flat")}
                  />
                  <label className={`text-dark_grey font-light pl-6`}>
                    Flat/Apartment
                  </label>
                </div>
              </div>
            </div>
            <div className={`${styles.homeContainer}`}>
              <div className={` p-2 ${styles.inputField}`}>
                <input
                  type="checkbox"
                  className={`ml-6`}
                  name="house_type"
                  value={values.house_type}
                  checked={values.house_type === "semiDetachedHouse"}
                  onChange={(e) =>
                    setFieldValue("house_type", "semiDetachedHouse")
                  }
                />
                <label className={`text-dark_grey font-light pl-6`}>
                  Semi/Detached House
                </label>
              </div>
            </div>
          </div>

          <div className={`inline-flex w-full justify-center pt-8`}>
            <div className={`${styles.homeContainer}`}>
              <div className={`${styles.divider}`}>
                <div className={`p-2 ${styles.inputField}`}>
                  <input
                    type="checkbox"
                    className={`ml-6`}
                    name="house_type"
                    value={values.house_type}
                    checked={values.house_type === "townHouse"}
                    onChange={(e) => setFieldValue("house_type", "townHouse")}
                  />
                  <label className={`text-dark_grey font-light pl-6`}>
                    Townhouse
                  </label>
                </div>
              </div>
            </div>
            <div className={`${styles.homeContainer}`}>
              <div className={` p-2 ${styles.inputField}`}>
                <input
                  type="checkbox"
                  className={`ml-6`}
                  name="house_type"
                  value={values.house_type}
                  checked={values.house_type === "mansion"}
                  onChange={(e) => setFieldValue("house_type", "mansion")}
                />
                <label className={`text-dark_grey font-light pl-6`}>
                  Large House/Mansion
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={`mx-auto mt-10 ${styles.secondChoiceWrapper}`}>
          <p
            className={`text-center font-normal text-dark_grey pt-6 text-lg pb-2 ${styles.borderBottom} `}
          >
            Let us know where you are
          </p>
          <p className={`p-4 font-normal text-dark_grey`}>Select</p>
          <div className={`inline-flex w-full justify-center`}>
            <div className={`${styles.homeContainer}`}>
              <div className={`${styles.divider}`}>
                <div className={`p-6 ${styles.inputField}`}>
                  <label className={`text-dark_grey font-light pl-6 mb-4`}>
                    Location
                  </label>
                  <div
                    className={`flex justify-between p-2 mt-2 cursor-pointer ${styles.inputField}`}
                  >
                    <select
                      name="location"
                      value={values.location}
                      onChange={(e) =>
                        setFieldValue("location", e.target.value)
                      }
                      className={`ml-6 w-96 text-dark_grey bg-light_grey font-light`}
                    >
                      <option defaultChecked>Select location</option>
                      <option value="house">House 7+</option>
                      <option value="d/sd house">D/SD House</option>
                      <option value="townHouse">TownHouse</option>
                      <option value="3+ bed apartment">3+ Bed Apartment</option>
                    </select>
                    <img src={selectDropDownIcon} alt="select-drop-down" />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.homeContainer}`}>
              <div className={` p-6 ${styles.inputField}`}>
                <label className={`text-dark_grey font-light pl-6 mb-4`}>
                  Frequency
                </label>
                <div
                  className={`flex justify-between p-2 mt-2 cursor-pointer ${styles.inputField}`}
                >
                  <select
                    name="frequency"
                    value={values.frequency}
                    onChange={(e) => setFieldValue("frequency", e.target.value)}
                    className={`ml-6 w-96 text-dark_grey bg-light_grey font-light`}
                  >
                    <option defaultChecked>Select frequency</option>
                    {frequencies.length > 0 &&
                      frequencies.map(({ id, name }) => {
                        return (
                          <option key={id} value={name}>
                            {name}
                          </option>
                        );
                      })}
                  </select>
                  <img src={selectDropDownIcon} alt="select-drop-down" />
                </div>
              </div>
            </div>
          </div>
          <p className={`p-8 text-yellow font-medium`}>
            **Get 10% discount on a one-year plan
          </p>
        </div>

        <div className={`mt-20 flex items-center justify-between`}>
          <p className={`text-left pl-64 text-dark_grey font-light text-lg`}>
            Total (+ VAT)
          </p>
          &#8358;
          <input
            type="number"
            name="amount"
            value={values.amount}
            onChange={(e) => setFieldValue("amount", e.target.value)}
            className={`text-right pr-64 font-bold bg-light_grey text-dark_grey text-2xl`}
          />
        </div>

        <div
          className={`flex items-center justify-end mt-20 pr-60 gap-4`}
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
      </form>
    </div>
  );
};

export default HousingInfo;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from "./GetStarted.module.scss";
import selectDropDownIcon from "../../assets/select-dropdown.svg";
import Button from "../../components/shared/Button/Button";
import arrowRightIcon from "../../assets/arrow-right.svg";
import suppportIcon from "../../assets/support.svg";
import { registerUser } from "../../API/endpoints/Create";
import PaymentModal from "../../components/Modals/PaymentModal";



const GetStarted = () => {
  const navigate = useNavigate();
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
  const [frequencies, setFrequencies] = useState([]);
  const [houseTypes, setHouseTypes] = useState([]);
  const [price , setPrice] = useState<any>({});
  const [showPaymentModal , setShowPaymentModal] = useState<any>(false);


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

 const openPaymentModal= ()=> setShowPaymentModal(true)
  


//  let locationValue:any = locations.find((ele)=> ele.value === formValues.location);
//  let frequencyValue:any = frequencyOptions.find((ele)=> ele.value === formValues.frequency);

//  const handleSubmit = () => {
//   const allValues = {
//     ...formValues,
//     amount: prices[formValues.house_type][formValues.frequency],
//   };

//   sessionStorage.setItem("_cachedHouseDetails", JSON.stringify(allValues));
//   setDetails(allValues);

//   return navigate("/confirm-payment");
// };

// useEffect(() => {
//   const savedDetails = JSON.parse(
//     sessionStorage.getItem("_cachedHouseDetails")as string
//   );

//   if (savedDetails && Object.keys(savedDetails).length) {
//     setFormValues({ ...savedDetails });
//   }
// }, []);
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
      let request = axios.get(
        `https://resido-onboarding.herokuapp.com/house`
      );
      let response = (await request).data
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
      house_type:  "",
      location:  "",
      frequency:  "",
      amount:  "",
      name:'',
      email: '',
      whatsapp_number:  '',
      alt_whatsapp_number:'',
      address:''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please input your full name'),
      email:Yup.string()
      .email('Use valid format')
      .required('Please input your email address'),
      address: Yup.string().required('Please input your home address'),
      whatsapp_number:Yup.number().required('Please input your whatsapp number')
    }),
    async onSubmit(values:any) {
      if (isValid) {
        setFormValues({ ...values });
        
        let postData = {           
          name: values.name,
          email: values.email,
          location:values.location,
          whatsapp_number:values.whatsapp_number,
          alt_whatsapp_number:values.alt_whatsapp_number,
          frequency:values.frequency,
          house_type: values.house_type,
          amount:price.price
        };

        try {
          const postRes = await registerUser({ params: postData});
          console.log(postData)
          if (postRes) {
            console.log(postRes)
          }
        } catch ({ error }) {
          console.error(error)
        }
      }
    },
  });


  let houseTypeObject:any = Object.assign({}, houseTypes);

  useEffect(() => {
    getPrice(values.frequency, values.house_type);
  }, [values.frequency, values.house_type]);

  return (
    <form className={`bg-light_grey w-full ${styles.getStartedContainer}`} onSubmit={handleSubmit}>


        {/** Housing Info */}
        {isThisForm(0) && (
          <>
          <div>
          <h2 className="text-dark_grey font-semibold mt-20 text-3xl mx-auto pt-10 text-center">
            At Resido, we give value for your money
          </h2>
          <p className={`text-center text-dark_grey font-light pt-8 text-xl`}>
            Choose a plan, let’s walk you through it.
          </p>

          <div className={`mx-auto mt-10 ${styles.firstWrapper}`}>
            <p
              className={`text-center font-normal text-dark_grey pt-4 text-lg `}
            >
              Which of this best describes your home?
            </p>
            <div className="grid grid-cols-2 auto-rows-[0, 2fr] lg:ml-[2rem] lg:gap-[1.75rem]">
      
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
                      checked={values.house_type === houseTypeObject?.[0]?.id}
                      onChange={(e) => setFieldValue("house_type", houseTypeObject?.[0]?.id)}
                    />
                    <label className={`text-dark_grey font-light pl-6`}>
                      {houseTypeObject?.[0]?.name}
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
                    checked={values.house_type === houseTypeObject?.[1]?.id}
                    onChange={(e) =>
                      setFieldValue("house_type", houseTypeObject?.[1]?.id)
                    }
                  />
                  <label className={`text-dark_grey font-light pl-6`}>
                  {houseTypeObject?.[1]?.name}   
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
                      checked={values.house_type === houseTypeObject?.[2]?.id}
                      onChange={(e) => setFieldValue("house_type", houseTypeObject?.[2]?.id)}
                    />
                    <label className={`text-dark_grey font-light pl-6`}>
                    {houseTypeObject?.[2]?.name}   
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
                    checked={values.house_type === houseTypeObject?.[3]?.id}
                    onChange={(e) => setFieldValue("house_type", houseTypeObject?.[3]?.id)}
                  />
                  <label className={`text-dark_grey font-light pl-6`}>
                  {houseTypeObject?.[3]?.name}   
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
                        onChange={(e) => setFieldValue('location',e.target.value)}
                        value={values.location}
                        className={`ml-6 w-96 text-dark_grey bg-light_grey font-light`}
                      >
                        {locations.map((location:any) => {
                          return (
                            <option value={location.value}>{location.label}</option>
                          ) 
                        })}
                       
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
                      onChange={(e) => setFieldValue('frequency', e.target.value)}
                      className={`ml-6 w-96 text-dark_grey bg-light_grey font-light capitalize`}
                    >
                      <option value='' defaultChecked>Select frequency</option>
                      {
                      frequencies.map(({id, name}) => {
                        return (
                          <option key={id} value={id}>
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
            
              <div className="text-right pr-64 font-bold bg-light_grey text-dark_grey text-2xl">
                  <p className="price">
                    ₦{price.price}
                  </p>
                </div>
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
        </div>
        </>
        )}
        

        {/** */}
        {isThisForm(1) && (
          <>
            <div>
          <h5
            className={`text-right pr-64 pt-10 text-dark_grey font-medium mt-20 text-base`}
          >
            Fields marked * are compulsory
          </h5>
          <div className={` mx-auto mt-2 ${styles.formContainer}`}>
            <h4
              className={`text-center mt-10 text-dark_grey font-semibold pb-2 ${styles.borderBottom}`}
            >
              Personal info
            </h4>

            <div className={`mb-8`}>
              <label className={``}>Full name*</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={e => setFieldValue('name',e.target.value)}
                placeholder="Enter your full name"
                className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
              />
            </div>

            <div className={`mb-8`}>
              <label className={``}>Email*</label>
              <br />
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={e => setFieldValue('email',e.target.value)}
                placeholder="Enter your email"
                className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
              />
            </div>

            <div className={`mb-8`}>
              <label className={``}>Home address*</label>
              <input
                type="text"
                name="home_address"
                value={values.home_address}
                onChange={e => setFieldValue('home_address', e.target.value)}
                placeholder="Enter your home address"
                className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
              />
            </div>

            <div className={`mb-8`}>
              <label className={``}>Whatsapp number*</label>
              <input
                type="tel"
                name="whatsapp_number"
                value={values.whatsapp_number}
                onChange={e => setFieldValue('whatsapp_number',e.target.value)}
                placeholder="Enter your Whatsapp number"
                className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
              />
            </div>

            <div>
              <label className={``}>Alternate Whatsapp number</label>
              <input
                type="tel"
                name="alt_whatsapp_number"
                value={values.alt_whatsapp_number}
                onChange={e => setFieldValue('alt_whatsapp_number',e.target.value)}
                placeholder="Enter an alternate Whatsapp number"
                className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
              />
            </div>

            <div className={`mt-2 flex items-center justify-between`}>
              <div className={`flex gap-2 pl-20`}>
                <img src={suppportIcon} alt="support" />
                <a href=" " className={`underline text-dark_blue`}>
                  Get support
                </a>
              </div>
              <div className={`flex items-center justify-en pr-20`}>
                <Button
                  type="filled"
                  bgColor="light_blue"
                  color="dark_blue"
                  text="Let’s get started"
                  onClick={renderNextForm}
                  classes="w-32 h-10 md:w-28 xl:w-36 rounded-md text-sm capitalize text-dark_blue bg-light_blue"
                />
              </div>
            </div>
          </div>
        </div>
          </>
        )}
        {isThisForm(2) && (
          <div>
            <div>
              <img src="./assets/left-arrow-direction" alt="left-arrow"/>
            </div>
            <div>
          <h5
            className={`text-right pr-64 pt-10 text-dark_grey font-medium mt-20 text-base`}
          >
          </h5>
          <div className={` mx-auto mt-2 ${styles.formContainerSummary}`}>
            <div className={`${styles.flexBox} ${styles.headerSummary}`}>
              <h2>Total (Vat Inclusive)</h2>
              <h2  className={`${styles.medium_text_bold}`}>₦25,000</h2>
            </div>
            <h2 className={`${styles.medium_text_bold}`}>Breakdown</h2>
<div>
  <h3 className={`${styles.title_sub_text}`}>Apartment Type</h3>
  <div className={`${styles.flexBox}`}>
    <p className={`${styles.medium_text}`}>3+ Bedroom Apartment</p>
    <p className={`${styles.medium_text}`}>₦26,000</p>
  </div>
</div>
           

           
<div>
  <h3 className={`${styles.medium_text}`}>Discount</h3>
  <div className={`${styles.flexBox}`}>
    <p className={`${styles.medium_text} ${styles.discount}`}>10% off</p>
    <p className={`${styles.medium_text} ${styles.discount_fee}`}>-₦1,000</p>
  </div>
</div>
           

        <div className={`${styles.flexBox}`}>
          <p className={`${styles.title_sub_text}`}>Location</p>
          <p className={`${styles.title_sub_text}`}>Home Address</p>
          </div>  


          <div className={`${styles.flexBox}`}>
          <p className={`${styles.medium_text}`}>Victoria Island</p>
          <p>104, Saka Tinubu street</p>
          </div> 


           <h4 className={`${styles.title_sub_text}`}>Frequency</h4> 
           <h3 className={`${styles.medium_text}`}>Monthly</h3>



           <button type="button" onClick={openPaymentModal} className={`${styles.btn_payment}`}>Pay ₦25,000 </button>
          </div>
        </div>
          </div>
          
        )}
        <PaymentModal visible={showPaymentModal}/>
    </form>
  );
};

export default GetStarted;


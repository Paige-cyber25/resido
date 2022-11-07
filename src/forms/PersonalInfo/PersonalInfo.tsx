import React from "react";
import * as Yup from 'yup';
import styles from "./PersonalInfo.module.scss";
import Button from "../../components/shared/Button/Button";
import suppportIcon from '../../assets/support.svg';
import { registerUser } from "../../API/endpoints/Create";

export const PersonalInfo = ({formValues, setFormValues, useFormik}:any) => {
   
    const { handleSubmit, values, setFieldValue, isValid } = useFormik({
        initialValues: {
          name:'',
          email: '',
          whatsapp_number:  '',
          alt_whatsapp_number:'',
          address:'',
          amount:''
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
              console.log(values)
            setFormValues({ ...formValues, ...values })
    
            let postData = {           
              name: values.name,
              email: values.email,
              location:formValues.location,
              whatsapp_number:values.whatsapp_number,
              alt_whatsapp_number:values.alt_whatsapp_number,
              frequency:formValues.frequency,
              house_type: formValues.house_type,
              amount:formValues.amount
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
    console.log(values, formValues)
  return (
    <div>
      <h5
        className={`text-right pr-64 pt-10 text-dark_grey font-medium text-base`}
      >
        Fields marked * are compulsory
      </h5>
      <div className={` mx-auto mt-2 ${styles.formContainer}`}>
        <h4
          className={`text-center mt-10 text-dark_grey font-semibold pb-2 ${styles.borderBottom}`}
        >
          Personal info
        </h4>
        <form className={`p-14 ml-8`} onSubmit={handleSubmit}>
          <div className={`mb-8`}>
            <label className={``}>Full name*</label>
            <input
              type="text"
              name='name'
              value={values.name}
              onChange ={e => setFieldValue('name', e.target.value)}
              placeholder="Enter your full name"
              className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
            />
          </div>

          <div className={`mb-8`}>
            <label className={``}>Email*</label>
            <br />
            <input
              type="email"
              name='email'
              value={values.email}
              onChange ={e => setFieldValue('email', e.target.value)}
              placeholder="Enter your email"
              className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
            />
          </div>

          <div className={`mb-8`}>
            <label className={``}>Home address*</label>
            <input
              type="text"
              name='address'
              value={values.address}
              onChange ={e => setFieldValue('address', e.target.value)}
              placeholder="Enter your home address"
              className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
            />
          </div>

          <div className={`mb-8`}>
            <label className={``}>Whatsapp number*</label>
            <input
              type="tel"
              name='whatsapp_number'
              value={values.whatsapp_number}
              onChange ={e => setFieldValue('whatsapp_number', e.target.value)}
              placeholder="Enter your Whatsapp number"
              className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
            />
          </div>

          <div>
            <label className={``}>Alternate Whatsapp number</label>
            <input
              type="tel"
              name='alt_whatsapp_number'
              value={values.alt_whatsapp_number}
              onChange ={e => setFieldValue('alt_whatsapp_number', e.target.value)}
              placeholder="Enter an alternate Whatsapp number"
              className={`mt-4 bg-light_grey p-3 ${styles.formInputField}`}
            />
          </div>
        </form>

        <div className={`mt-2 flex items-center justify-between`}>
          <div className={`flex gap-2 pl-20`}>
            <img src={suppportIcon} alt='support' />
            <a href=' ' className={`underline text-dark_blue`}>Get support</a>
          </div>
          <div className={`flex items-center justify-en pr-20`}>
          <Button
            type="filled"
            bgColor="light_blue"
            color="dark_blue"
            text="Get started"
            classes="w-32 h-10 md:w-28 xl:w-36 rounded-md text-sm capitalize text-dark_blue bg-light_blue"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

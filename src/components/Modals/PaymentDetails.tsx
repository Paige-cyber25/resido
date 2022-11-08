import React from "react";
import styles from "./PaymentDetails.module.scss";
import axios from "axios";

const PaymentDetails = ({visible})=>{

// Use props to get the whatsApp number
    async function verifyPayment(whatsappNumber) {
        try {
          let request = axios.get(
            `https://resido-onboarding.herokuapp.com//users/verifypayment/${whatsappNumber}`
          );
          let response = (await request).data;
          if (response) {
          }
        } catch (error) {
          console.error(error);
        }
      }
    if(!visible) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-2 rounded w-100">
            <h1 className="font-bold text-center text-xl text-gray-700">
            Select a Payment Method  
            
            </h1>
            
            <p>Transfer the exact amount of ₦25,000 to the bank account below.</p>
            <div>
                <h3>Bank name</h3>
                <p>Wema Bank</p>
                <h3>Account Number</h3>
                <p>123456789</p>
                <h3>Account Name</h3>
                <p>Resido</p>
            </div>

            <button className={`${styles.btn_payment}`}>I have paid</button>

            <p><span><img/></span>  Powered by Wema Bank</p>
          </div>
        </div>
    )
}


export default PaymentDetails;
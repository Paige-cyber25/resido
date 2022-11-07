import React from "react";
import PayWithBankIcon from '../../assets/pay_with_bank.svg';
import PayStackIcon from '../../assets/paystack.svg';
import styles from "./GetStarted.module.scss";
import PaymentDetails from "./PaymentDetails";
import {useState} from 'react'
import axios from "axios";

const  PaymentModal = ({visible}) => {
    const [openBankDetails, setOpenBankDetails] = useState(false)
const openModal = () =>{
setOpenBankDetails(true)
}

async function payStackCheckOut(params) {
    try {
        let request = axios.get(
          `https://checkout.paystack.com/xt0tvv3zvo9p57k`
        );
        let response = (await request).data;
        if (response) {
            console.log(response, "inserdnknfj.k.")
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
        Select a Payment Method        </h1>
        

        <div className="flex hover:cursor-pointer" onClick={() => window.open( 'https://checkout.paystack.com/xt0tvv3zvo9p57k')}>
          <div  className=""><img src={PayStackIcon} alt="" /></div>
          <p>Pay with Paystack</p>
        </div>
        <div className="flex">
        <div  onClick={openModal}><img src={PayWithBankIcon}  alt=""/></div>
          <p>Pay with Bank Transfer</p>
        </div>
        
      </div>

      <PaymentDetails visible={openBankDetails}/>
    </div>
)
}


export default PaymentModal;
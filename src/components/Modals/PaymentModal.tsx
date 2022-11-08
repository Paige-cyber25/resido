import React, { useEffect } from "react";
import PayWithBankIcon from '../../assets/pay_with_bank.svg';
import PayStackIcon from '../../assets/paystack.svg';
import styles from "./GetStarted.module.scss";
import PaymentDetails from "./PaymentDetails";
import { useState } from 'react'
import axios from "axios";
import useScript from '../../hooks/useScript'

const PaymentModal = ({ visible, totalAmount, userWhatsappNumber, userEmail, paystackUrl }) => {
  const [openBankDetails, setOpenBankDetails] = useState(false)

  const openModal = () => {
    setOpenBankDetails(true)
  }

  const { Alatpay } = useScript("https://alatpay-test.azurewebsites.net/js/alatpay.js", 'Alatpay')
  const NEXT_PUBLIC_WEMA_API_KEY = "0d296a5575ec4a0895c80d065fa44801"
  const NEXT_PUBLIC_WEMA_BUSINESS_ID = "348fc803-6a69-4580-e0ce-08daa1211597"


  const payWithWema = () => {
    let popup = Alatpay?.setup({
      apiKey: NEXT_PUBLIC_WEMA_API_KEY,
      businessId: NEXT_PUBLIC_WEMA_BUSINESS_ID,
      email: userEmail,
      phone: userWhatsappNumber,
      metaData: null,
      currency: "NGN",
      amount: totalAmount,

      onTransaction: async function (response) {
      },

      onClose: function () {
        console.log("Payment gateway is closed");
      },
    });

    popup.show();
  };

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
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-100">
        <h1 className="font-bold text-center text-xl text-gray-700">
          Select a Payment Method        </h1>


        <a href={paystackUrl}
          target="_blank"
          rel="noreferrer">
          <div className="flex hover:cursor-pointer">
            <div className=""><img src={PayStackIcon} alt="" /></div>
            <p>Pay with Paystack</p>
          </div>
        </a>
        <div className="flex">
          <div onClick={payWithWema}><img src={PayWithBankIcon} alt="" /></div>
          <p>Pay with Bank Transfer</p>
        </div>

      </div>

      <PaymentDetails visible={openBankDetails} />
    </div>
  )
}


export default PaymentModal;
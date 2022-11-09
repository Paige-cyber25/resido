import React, { useState } from "react";
import PayWithBankIcon from '../../assets/pay_with_bank.svg';
import PayStackIcon from '../../assets/paystack.svg';
import axios from "axios";
import useScript from '../../hooks/useScript'
import { useNavigate } from "react-router-dom";

const PaymentModal = ({ visible, totalAmount, userWhatsappNumber, userEmail, paystackUrl }) => {
  const [openPaystack, setOpenPaystack] = useState(false)
  const navigate = useNavigate()

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

  function Paystack({ src }: any) {

    const [isCalled, setIsCalled] = useState(false)
    const verifyPayment = async () => {
      if (isCalled === false) {
        try {
          const response = await axios.get(`https://resido-onboarding.herokuapp.com/users/verifypayment/${userWhatsappNumber}`)
          navigate('/')
          if (isCalled === false) {
            setIsCalled(true)

            console.log(response.data.message, "response...")
            window.location.reload()
          }

        } catch (error) {
          console.error(error)
        }
      }

    }

    if (isCalled === false) {
      window.addEventListener("message", (event) => {
        if (event.data.data.status) {
          verifyPayment();
        }
      });
    }

    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          backgroundColor: "#fff",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe
          src={src}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    );
  }

  
  if (!visible) return null;
  if (openPaystack) return <Paystack src={paystackUrl} />;
  return (
    <div
      className="fixed inset-0 bg-black z-20 bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white p-[2.5rem] lg:p-2 rounded w-[20rem] lg:w-[30rem] lg:h-[15rem]">
        <h1 className="font-bold text-center text-xl text-dark_grey pb-[1rem] lg:pb-[2rem] pt-[1rem] lg:pt-[2rem]">
          Select a Payment Method
        </h1>

        {/* <a href={paystackUrl} target="_blank" rel="noreferrer" className='flex cursor-pointer items-center  lg:pl-[2rem] pb-[1rem] lg:pb-[2rem]'>
          <div className="flex hover:cursor-pointer">
            <div className="">
              <img src={PayStackIcon} alt="" className='pr-[1rem] lg:pr-[2rem]' />
            </div>
            <p>Pay with Paystack</p>
          </div>
        </a> */}

        <div
          className='flex cursor-pointer items-center  lg:pl-[2rem] pb-[1rem] lg:pb-[2rem]'
          onClick={() => setOpenPaystack(true)}
        >
          <div className="">
            <img src={PayStackIcon} alt="" className='pr-[1rem] lg:pr-[2rem]' />
          </div>
          <p>Pay with Paystack</p>
        </div>
        <div className="flex lg:pl-[2rem] cursor-pointer" onClick={payWithWema}>
          <div>
            <img
              src={PayWithBankIcon}
              alt=""
              className=" pr-[1rem] lg:pr-[2rem]"
            />
          </div>
          <p>Pay with Bank Transfer</p>
        </div>
      </div>

      {/* <PaymentDetails visible={openBankDetails} /> */}
    </div>
  );
};

export default PaymentModal;

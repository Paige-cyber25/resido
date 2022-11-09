import React from 'react'
import coinsIcon from '../../../assets/coins.svg';
import checkIcon from '../../../assets/check.svg';
import lockIcon from '../../../assets/lock.svg';

export const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 mt-[3rem] justify-center">
        <div className="bg-dark_yellow rounded-lg p-5 lg:p-8 m-auto w-80 lg:w-96 h-72">
          <h2 className="text-left font-semibold text-2xl mb-6 text-dark_grey">Affordable</h2>
          <p className="text-left font-light mb-8 w-72 text-xl text-dark_grey">
            We offer competitive prices. That too without compromising on timely
            and excellent service delivery.
          </p>
          <img src={coinsIcon} alt="coins_icon" className="text-left w-7 h-7" />
        </div>
        <div className="bg-light_blue rounded-lg p-5 lg:p-8 w-80 lg:w-96 h-72 m-auto">
          <h2 className="text-left font-semibold text-2xl mb-6 text-dark_grey">Simple</h2>
          <p className="text-left font-light mb-12 w-72 text-xl text-dark_grey">
            With a one-time WhatsApp message, you can have us managing your home
            in no time.
          </p>
          <img src={checkIcon} alt="check_icon" className="text-left w-7 h-7" />
        </div>
        <div className="bg-peach rounded-lg p-5 lg:p-8 w-80 lg:w-96 h-72 m-auto">
          <h2 className="text-left font-semibold text-2xl mb-6 text-dark_grey">Safe</h2>
          <p className="text-left font-light mb-12 w-72 text-xl text-dark_grey">
            This is our guarantee: when you choose Resido, your home and beloved
            assets are safe.
          </p>
          <img src={lockIcon} alt="lock_icon" className="text-left w-7 h-7" />
        </div>
      </div>
  )
}

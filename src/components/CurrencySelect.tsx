import React from 'react'
import { currencyCodes } from '../Data/data'

const CurrencySelect = () => {
  return (
    <div className="flex px-[10px] min-h-[45px] items-center rounded-[6px] bg-white/10 border border-white/50">
    <img
      className=" w-6"
      src="https://flagsapi.com/US/flat/64.png"
      alt="flag"
    />

    <select className="outline-none border-none bg-transparent text-white text-base font-medium px-2.5 pl-1.5">
      
      {currencyCodes.map(currency => (
        <option className="text-black font-medium" value= {currency} key={currency}>{currency}</option>
      ))}
    
    </select>
  </div>
  )
}

export default CurrencySelect
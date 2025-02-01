import React from 'react'
import { currencyCodes } from '../Data/data'

interface CurrencySelectProps { 
  selectedCurrency : string,
  handleCurrency : (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({selectedCurrency, handleCurrency}) => {

  const countryFlagCode = selectedCurrency.substring(0,2);
  
  
  return (
    <div className="flex px-[10px] min-h-[45px] items-center rounded-[6px] bg-white/10 border border-white/50">
    <img
      className=" w-6"
      src={`https://flagsapi.com/${countryFlagCode}/flat/64.png`}
      alt="flag"
    />

    <select 
    onChange={(e)=> handleCurrency(e)}
      value={selectedCurrency}
    className="outline-none border-none bg-transparent text-white text-base font-medium px-2.5 pl-1.5">
      
      {currencyCodes.map(currency => (
        <option className="text-black font-medium" value= {currency} key={currency}>{currency}</option>
      ))}
    
    </select>
  </div>
  )
}

export default CurrencySelect
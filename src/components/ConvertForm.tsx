import React, { useEffect } from "react";
import CurrencySelect from "./CurrencySelect";

const ConvertForm = () => {
  const [fromCurrency, setFromCurrency] = React.useState<string>("USD");
  const [toCurrency, setToCurrency] = React.useState<string>("NPR");
  const [amount, setAmount] = React.useState <number> (1);
  const [result, setResult] = React.useState <string> ('');
  const [isLoading, setIsLoading] = React.useState <boolean> (false);


  // function to swap from and to currency

  const handleSwapCurrencies= (): void => {
    setFromCurrency(() => toCurrency);
    setToCurrency(() => fromCurrency);
  }

  // function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getExchangeRate();
  }

  // function to get exchange rate
  const getExchangeRate = async (): Promise<void> => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    setIsLoading(true)

    try {
      const response = await fetch(API_URL)
      if(!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
      
    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getExchangeRate();
  }, []);
  

  return (
    <form onSubmit={handleSubmit} className="mt-11">
      <div className="flex flex-col mb-[30px]">
        <label className="text-white font-medium block mb-2.5 text-base">
          Enter amount
        </label>
        <input
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
          type="number"
          required
          className="outline-none text-[1.1rem] px-[15px] text-white font-medium min-h-[48px] rounded-[6px] bg-white/10 border border-white/50 "
        />
      </div>

      <div className="flex-col items-center justify-between">
        <div className="flex justify-between items-center">
          <div className="form-section">
            <label className="text-white">Form</label>

            <CurrencySelect
              selectedCurrency={fromCurrency}
              handleCurrency={(e) => setFromCurrency(e.target.value)}
            />
          </div>

          <div 
          onClick={handleSwapCurrencies}
          className="h-10 w-10 cursor-pointer flex mt-6 items-center justify-center rounded-full bg-white/10 border border-white/50 transition duration-200 ease-in-out hover:bg-white/30">
            <svg
              width="16"
              viewBox="0 0 20 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                fill="#fff"
              />
            </svg>
          </div>

          <div className="form-section">
            <label className="text-white">To</label>
            <CurrencySelect
              selectedCurrency={toCurrency}
              handleCurrency={(e) => setToCurrency(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full min-h-13 rounded-md border-none outline-none text-base font-semibold cursor-pointer my-8 transition duration-200 ease-in-out bg-white hover:bg-white/70"
          >
            Get Exchange Rate
          </button>

          <p className="text-white text-xl font-semibold text-center py-6 rounded-md tracking-wide bg-white/15 h-18 ">
            {isLoading ? "Loading..." : result } 
          </p>
        </div>
      </div>
    </form>
  );
};

export default ConvertForm;

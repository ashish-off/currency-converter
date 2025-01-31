import React from "react";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <>
      <div className="font-[Poppins] min-h-screen bg-cyan-800 flex flex-col items-center justify-center ">
        <div className="w-[450px] border border-white/30 shadow-2xl py-12 px-12 bg-[#020728]/20 rounded-xl">
          <h2 className="text-white text-3xl font-semibold text-center">
            Currency Converter
          </h2>

          <CurrencyConverter />
          
        </div>
      </div>
    </>
  );
};

export default App;

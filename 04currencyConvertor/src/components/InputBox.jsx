// import React, {useId} from 'react'

// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = "usd",
//     amountDisable = false,
//     currencyDisable = false,
//     className = "",
// }) {
//    const amountInputId = useId()

//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//             <div className="w-1/2">
//                 <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
//                     {label}
//                 </label>
//                 <input
//                     id={amountInputId}
//                     className="outline-none w-full bg-transparent py-1.5"
//                     type="number"
//                     placeholder="Amount"
//                     disabled={amountDisable}
//                     value={amount}
//                     onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//                 />
//             </div>
//             <div className="w-1/2 flex flex-wrap justify-end text-right">
//                 <p className="text-black/40 mb-2 w-full">Currency Type</p>
//                 <select
//                     className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                     value={selectCurrency}
//                     onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//                     disabled={currencyDisable}
//                 >
                    
//                         {currencyOptions.map((currency) => (
//                             <option key={currency} value={currency}>
//                             {currency}
//                             </option>
//                         ))}
                
//                 </select>
//             </div>
//         </div>
//     );
// }

// export default InputBox;


import React from 'react'

const InputBox = ({ amount, setAmount, currency, setCurrency }) => {
  const handleAmountChange = (e) => {
    const value = e.target.value
    // Ensure the value is a number or an empty string
    setAmount(value === '' ? '' : Number(value))
  }

  return (
    <div>
      <input
        type="number"
        value={amount || ''}  // Ensure value is always a string or number
        onChange={handleAmountChange}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        {/* Add more currencies as needed */}
      </select>
    </div>
  )
}

export default InputBox

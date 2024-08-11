// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;
import { useEffect, useState } from 'react'

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log(`Fetching data for currency: ${currency}`)
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data)
        setData(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setError(error)
      })
  }, [currency])

  return { data, error }
}

export default useCurrencyInfo

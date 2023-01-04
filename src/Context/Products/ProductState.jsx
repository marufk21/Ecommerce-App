import React, { useContext } from 'react'
import axios from 'axios'
import ProductContext from './ProductContext'
import { useState, useEffect } from 'react'

const ProductState = (props) => {
  const [data, setData] = useState(null)

  // Fetching data
  async function fetchData() {
    try {
      const response = await axios.get(
        'https://api.pujakaitem.com/api/products',
      )
      console.log(response)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    async function fetchDataAndSet() {
      const data = await fetchData()
      setData(data)
    }
    fetchDataAndSet()
  }, []) // Runs in one time

  return (
    <ProductContext.Provider value={'maruf'}>
      {props.children}
    </ProductContext.Provider>
  )
}

// Custom Hooks
const useProductContext = () => {
  return useContext(ProductContext)
}

export { ProductState, useProductContext, ProductContext }

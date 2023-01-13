import { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import ProductContext from './ProductContext'
import reducer from "../Reducers/ProductReducers";
const API = 'https://api.pujakaitem.com/api/products'

const ProductState = (props) => {
  
  const intialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  }
  // useReducer Hook
  const [state, dispatch] = useReducer(reducer, intialState)

  // Fetch the Data Using Axios - Products
  const getProducts = async (url) => {
    dispatch({ type: 'SET_LOADING' })
    try {
      const res = await axios.get(url)
      const products = await res.data
      // console.log(products)
      dispatch({ type: 'SET_API_DATA', payload: products })
    } catch (error) {
      dispatch({ type: 'API_ERROR' })
    }
  }
  // Fetch the Data Using Axios - SingleProduct
  const getSingleProduct = async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' })
    try {
      const res = await axios.get(url)
      const singleProduct = await res.data
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct })
    } catch (error) {
      dispatch({ type: 'SET_SINGLE_ERROR' })
    }
  }

  // useEffect Hook for reload page one time
  useEffect(() => {
    getProducts(API)
  }, [])

  return (
    <ProductContext.Provider value={{ ...state, getSingleProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

// Custom Hook
const useProductContext = () => {
  return useContext(ProductContext)
}

export { ProductState, useProductContext, ProductContext }

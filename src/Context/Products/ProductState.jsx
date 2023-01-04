import React,{useContext} from 'react'
import ProductContext from './ProductContext'

const ProductState = (props) => {
  const s1 = {
    name: 'Maruf',
    id: '22',
  }
  return (
    <ProductContext.Provider value={s1}>
      {props.children}
    </ProductContext.Provider>
  )
}

// Custom Hooks
const useProductContext = () => {
  return useContext(ProductContext)
}

export { ProductState, useProductContext, ProductContext }

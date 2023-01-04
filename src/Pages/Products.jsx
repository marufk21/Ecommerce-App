// import React from 'react'
// import ProductContext from '../Context/Products/ProductContext'
import {useProductContext} from '../Context/Products/ProductState'

const Products = () => {
  // const a = useContext(ProductContext)
  const a = useProductContext()
  return (
    <>
      <p>This is my name {a.name}</p>
      <p>This is my id {a.id}</p>
    </>
  )
}

export default Products

import React, { useContext } from 'react'
import ProductContext from '../Context/Products/ProductContext'

const Products = () => {
  const a = useContext(ProductContext)
  return (
    <>
      <p>This is my name {a.name}</p>
      <p>This is my id {a.id}</p>
    </>
  )
}

export default Products

import {useProductContext} from '../Context/Products/ProductState'

const Products = () => {
  const a = useProductContext()
  return (
    <>
      <p>This is my name {a.name}</p>
      <p>This is my id {a.id}</p>
    </>
  )
}

export default Products

import { useProductContext } from '../Context/Products/ProductState'
import Product from './Product'

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProductContext()
  //   console.log(featureProducts)
  if (isLoading) {
    return <div>...Loading</div>
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <h2 class="mb-16 text-5xl font-extrabold tracking-tight flex justify-center text-gray-900 dark:text-white">
          Our Products
        </h2>
        <div className="container px-7 my-4 ml-12 flex justify-center">
          <div className="flex flex-wrap -m-4">
            {featureProducts.map((curElem) => {
              return <Product key={curElem._id} {...curElem} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts

import { useProductContext } from '../Context/ProductState'
import Product from './Product'

const FeaturedProducts = () => {
  const { isLoading, featureProducts } = useProductContext()
  
  if (isLoading) {
    return <div>...Loading</div>
  }
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <h2 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Our Products
            </h2>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {featureProducts.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts

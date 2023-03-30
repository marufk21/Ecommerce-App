import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageNavigation from '../Components/PageNavigation'
import { useProductContext } from '../Context/ProductState'
import StarReview from '../Components/StarReview'
import AddToCart from '../Components/AddToCart'
import ProductImage from '../Components/ProductImage'

const API = 'https://api.pujakaitem.com/api/products'

const SingleProduct = () => {
  const {
    isSingleLoading,
    singleProduct,
    getSingleProduct,
  } = useProductContext()

  const { id } = useParams()
  const {
    // id: alias,
    name,
    image,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct

  console.log(image);
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])

  if (isSingleLoading) {
    return <div>Loading.....</div>
  }
  return (
    <>
      <PageNavigation title={name} />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
           <ProductImage imgs={image}/>

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {company}
              </h2>
              <h1 className=" text-gray-900 text-3xl title-font font-medium mb-1">
                {name}
              </h1>

              {/* Star and Reviews */}
              <StarReview stars={stars} category={category} reviews={reviews} />
              {/* Description */}
              <p className="leading-relaxed">{description}</p>
              <h2 className=" mt-4 text-sm title-font text-gray-500 tracking-widest">
                Available: {stock}
              </h2>
              {/* Add To Cart */}
              {stock > 0 && <AddToCart price={price} product={singleProduct} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct

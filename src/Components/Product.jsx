import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'flowbite-react'
import FormatPrice from '../Helpers/FormatPrice'

const Product = (curElem) => {
  const { id, image, name, price } = curElem

  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="flex flex-col sm:my-3 max-w-lg mx-auto text-center text-gray-900 bg-white border rounded-lg shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <Card imgAlt={name} imgSrc={image}>
            <h5 className="text-xl font-semibold capitalize tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {<FormatPrice price={price} />}
              </span>
            </div>
          </Card>
        </div>
      </NavLink>
    </>
  )
}

export default Product

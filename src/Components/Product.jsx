import React from 'react'
import { Card } from 'flowbite-react'
import { NavLink } from 'react-router-dom'

const Product = (curElem) => {
  const { id, image, name, price, category } = curElem

  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="max-w-sm mx-4">
          <Card
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={image}
          >
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {price}
              </span>
            </div>
          </Card>
        </div>
      </NavLink>
    </>
  )
}

export default Product

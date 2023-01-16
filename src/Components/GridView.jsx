import React from 'react'
import Product from './Product'

const GridView = ({ products }) => {
  return (
    <section className="border-green-900 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-2 mx-auto mr-2 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {products.map((curELem) => {
            return <Product key={curELem.id} {...curELem} />
          })}
        </div>
      </div>
    </section>
  )
}

export default GridView

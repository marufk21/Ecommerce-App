import React from 'react'
import { useFilterContext } from '../Context/FilterContext'

const Sort = () => {
  const {
    filter_products,
    // grid_view,
    // setGridView,
    // setListView,
    sorting,
  } = useFilterContext()
  return (
    <>
      <div className="grid grid-cols-2 divide-x items-center mt-6">
        <div className="flex justify-center">
          <div className="flex items-center">
            <select
              name="sort"
              id="sort"
              className="w-44 text-sm  text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
              onClick={sorting}
            >
              <option value="">Relevance</option>
              <option value="low-to-high">Price Low to High</option>
              <option value="high-to-low">Price High to Low</option>
              <option value="a-z">Price (a-z)</option>
              <option value="z-a">Price (z-a)</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <span className="border w-44 text-sm  text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">{`Product Available ${filter_products.length}`}</span>
        </div>
      </div>
    </>
  )
}

export default Sort

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
      <div className="grid grid-cols-3 divide-x  items-center  py-3  mt-6 bg-gray-700 border-gray-700">
        {/* Dropdown Start */}
        <div className="my-auto flex justify-center">
          <div className="flex items-center mb-4">
            <select
              name="sort"
              id="sort"
              className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary"
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
        {/* Dropdown End */}
        <div className="flex justify-center">div</div>
        <div className="flex justify-center">
          <p>{`${filter_products.length} Product Available`}</p>
        </div>
      </div>
    </>
  )
}

export default Sort

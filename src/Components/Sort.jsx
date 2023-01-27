import React from "react";
import { useFilterContext } from "../Context/FilterContext";

const Sort = () => {
  const {
    filter_products,
    // grid_view,
    // setGridView,
    // setListView,
    sorting,
  } = useFilterContext();
  return (
    <>
      <div className="grid grid-cols-2 divide-x items-center mt-6">
        <div className="flex justify-center">
          <div className="flex items-center">
            <select
              name="sort"
              id="sort"
              className="py-2.5 px-5 pr-8 mr-2 mb-2 text-sm font-normal text-gray-500 focus  bg-white rounded-full  border-purple-600  hover:border-purple-600 hover:bg-gray-100 hover:text-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
          <span className="py-2.5 px-5 mr-2 mb-2 text-sm font-normal text-gray-500  border-purple-600  hover:border-purple-600  bg-white rounded-full border hover:bg-gray-100 hover:text-black dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{`Product Available ${filter_products.length}`}</span>
        </div>
      </div>
    </>
  );
};

export default Sort;

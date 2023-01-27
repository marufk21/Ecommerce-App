import React from "react";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../Context/FilterContext";
import FormatPrice from "../Helpers/FormatPrice";
const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  // console.log(
  //   "🚀 ~ file: FilterSection.js ~ line 23 ~ FilterSection ~ companyData",
  //   colorsData
  // );

  return (
    <>
      <aside className="w-64  sticky top-12 " aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center p-2 sm:p-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-auto p-2 rounded-lg sm:w-auto sm:p-3 sm:rounded-md"
                type="text"
                name="text"
                placeholder="Search"
                value={text}
                onChange={updateFilterValue}
              />
            </form>
          </div>

          <div className="flex flex-col items-center mt-2">
            <h3 className="mb-2 text-lg font-normal text-gray-500">Category</h3>
            <span className="flex flex-col">
              {categoryData.map((curElem, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    value={curElem}
                    className={
                      curElem === category
                        ? "capitalize mb-1 text-lg font-normal text-purple-600"
                        : "capitalize mb-1 text-lg font-normal text-gray-500"
                    }
                    onClick={updateFilterValue}
                  >
                    {curElem}
                  </button>
                );
              })}
            </span>
          </div>

          <div className="flex flex-col items-center mt-4">
            <h3 className="mb-2 text-lg font-normal text-gray-500">Company</h3>
            <form action="#">
              <select
                name="company"
                id="company"
                className="capitalize mb-2 text-base font-normal text-gray-500 "
                onClick={updateFilterValue}
              >
                {companyData.map((curElem, index) => {
                  return (
                    <option key={index} value={curElem} name="company">
                      {curElem}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>

          <div className="flex flex-col items-center mt-4">
            <h3 className="text-lg font-normal text-gray-500">Colors</h3>
            <div className="">
              {colorsData.map((curColor, index) => {
                if (curColor === "all") {
                  return (
                    <button
                      key={index}
                      type="button"
                      value={curColor}
                      name="color"
                      className=""
                      onClick={updateFilterValue}
                    >
                      <span className="mb-2 text-base font-normal text-gray-500">
                        All
                      </span>
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    type="button"
                    value={curColor}
                    name="color"
                    style={{ backgroundColor: curColor }}
                    className={
                      color === curColor
                        ? "mt-2 border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none opacity-100"
                        : "mt-2 border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                    }
                    onClick={updateFilterValue}
                  >
                    {color === curColor ? (
                      <FaCheck className="checkStyle" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <div className="flex space-x-3">
              <h3 className="text-lg font-normal text-gray-500">Price</h3>
              <p className="text-lg font-normal text-gray-500">
                <FormatPrice price={price} />
              </p>
            </div>

            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilterValue}
            />
          </div>

          <div className="flex justify-center mt-2">
            <button
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSection;

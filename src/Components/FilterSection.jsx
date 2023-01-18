import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { useFilterContext } from '../Context/FilterContext'

const FilterSection = () => {
  const {
    filters: { text, category, color },
    updateFilterValue,
    all_products,
  } = useFilterContext()

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr]
    })

    if (attr === 'colors') {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat()
    }

    return (newVal = ['all', ...new Set(newVal)])
  }

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, 'category')
  const companyData = getUniqueData(all_products, 'company')
  const colorsData = getUniqueData(all_products, 'colors')
  // console.log(
  //   "🚀 ~ file: FilterSection.js ~ line 23 ~ FilterSection ~ companyData",
  //   colorsData
  // );

  return (
    <>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? 'active' : ''}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            )
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              )
            })}
          </select>
        </form>
      </div>
      {/* COlor */}
      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === 'all') {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}
                >
                  all
                </button>
              )
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
                    ? 'border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none opacity-100'
                    : 'border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none'
                }
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FilterSection

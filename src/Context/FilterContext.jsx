import { createContext, useContext, useReducer, useEffect } from 'react'
import { useProductContext } from './ProductState'
import reducer from '../Reducers/FilterReducers'

const FilterContext = createContext()

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
}

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext()

  const [state, dispatch] = useReducer(reducer, initialState)

  // Set the grid view
  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' })
  }
  // Sorting function
  const sorting = (event) => {
    let userValue = event.target.value
    dispatch({ type: 'GET_SORT_VALUE', payload:userValue })
  }
  // Sort the products
  useEffect(() => {
    dispatch({ type: 'SORTING_PRODUCTS', payload: products })
  }, [state.sorting_value])

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products })
  }, [products])

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, sorting }} //setListView,
    >
      {children}
    </FilterContext.Provider>
  )
}
// Custom Hook for FilterContext
export const useFilterContext = () => {
  return useContext(FilterContext)
}

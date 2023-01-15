import FilterSection from '../Components/FilterSection'
import ProductList from '../Components/ProductList'
import Sort from '../Components/Sort'
import { useFilterContext } from '../Context/FilterContext'

const Products = () => {
  return (
    <>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3 ...">
          {' '}
          <FilterSection />
        </div>
        <div className="col-span-2 ...">
          {' '}
          <Sort />
        </div>
        <div className="row-span-2 col-span-2 ...">
          {' '}
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default Products

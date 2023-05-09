import FilterSection from "../Components/FilterSection";
import ProductList from "../Components/ProductList";
import Sort from "../Components/Sort";

const Products = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:row-span-3">
          <FilterSection />
        </div>
        <div className="md:col-span-2">
          <Sort />
        </div>
        <div className="md:row-span-2 md:col-span-2 flex flex-wrap justify-center">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Products;

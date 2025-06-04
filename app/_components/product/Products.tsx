import ProductCart from "./ProductCart";
import { productData } from "./productData";

function Products() {
  return (
    <div className="col-span-4 p-6 border border-primary-800 rounded-md">
      <h2 className="text-3xl font-bold text-primary-50 p-4 mb-6 rounded">
        Desserts
      </h2>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12">
        {/* Array.from({ length: 5 }).map((_, i) */}
        {productData.map((item) => (
          <div key={item.id} className="h-80 rounded-md">
            <ProductCart data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

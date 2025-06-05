"use client";

import Order from "@/_components/product/Order";
import Products from "@/_components/product/Products";
import { ProductListProvider } from "@/_context/ProductListProvider";

function Page() {
  return (
    <ProductListProvider>
      <section className="h-screen container mx-auto grid grid-cols-6 gap-x-6 my-10 px-10">
        <Products />
        <Order />
      </section>
    </ProductListProvider>
  );
}

export default Page;

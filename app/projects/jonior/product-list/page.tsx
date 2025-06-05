"use client";

import Order from "@/_components/product/Order";
import Products from "@/_components/product/Products";
import { ProductListProvider } from "@/_context/ProductListProvider";

function Page() {
  return (
    <ProductListProvider>
      <section className="container mx-auto grid grid-cols-6 gap-x-[clamp(4px,2vw,24px)] my-10 px-10">
        <Products />
        <Order />
      </section>
    </ProductListProvider>
  );
}

export default Page;

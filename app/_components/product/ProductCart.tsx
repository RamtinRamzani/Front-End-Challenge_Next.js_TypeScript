import Image from "next/image";
import addToCartIcon from "@/../public/images/jonior/product-list/icon-add-to-cart.svg";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/_context/ProductListProvider";

interface Product {
  id: number;
  title: string;
  detail: string;
  price: number;
  img: string;
}

function ProductCart({ data }: { data: Product }) {
  const { cart, addToCart, updateQuantity } = useProduct();

  const cartItem = cart.find((item) => item.id === data.id);
  const quantity = cartItem ? cartItem.quantity || 0 : 0;

  function handleAddToCart() {
    addToCart(data);
  }

  function handleDecrease() {
    updateQuantity(data.id, quantity - 1);
  }

  function handleIncrease() {
    updateQuantity(data.id, quantity + 1);
  }

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="relative h-3/4 rounded-md">
        <Image
          fill
          src={data.img}
          className="object-cover rounded-md shadow-md"
          alt={data.detail}
        />
        <div className="flex justify-center">
          {quantity > 0 ? (
            <Button
              className="absolute bottom-[-20px] w-3/5 max-w-[160px] h-11 rounded-xl border border-primary-600 bg-primary-800 text-white flex gap-4 justify-between items-center transition-colors hover:bg-primary-700 hover:border-primary-500 focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              aria-label="Adjust quantity"
            >
              <span
                className="text-lg hover:text-primary-300 cursor-pointer"
                aria-label="Decrease quantity"
                role="button"
                onClick={handleDecrease}
              >
                −
              </span>
              <span className="font-semibold">{quantity}</span>
              <span
                className="text-lg hover:text-primary-300 cursor-pointer"
                aria-label="Increase quantity"
                role="button"
                onClick={handleIncrease}
              >
                +
              </span>
            </Button>
          ) : (
            <Button
              className="absolute bottom-[-20px] w-3/5 max-w-[160px] h-11 rounded-xl border border-primary-600 bg-primary-800 text-primary-200 flex gap-3 justify-center items-center transition-colors hover:bg-primary-700 hover:border-primary-500 focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 cursor-pointer"
              aria-label="Add to cart"
              onClick={handleAddToCart}
            >
              <Image
                src={addToCartIcon}
                width={16}
                height={16}
                alt="Add to cart icon"
                className="invert"
              />
              <span>Add to Cart</span>
            </Button>
          )}
        </div>
      </div>
      <div className="h-1/4 flex flex-col">
        <span className="text-primary-500 capitalize">{data.title}</span>
        <p className="text-primary-50 font-semibold capitalize">
          {data.detail}
        </p>
        <span className="text-red-600">${data.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ProductCart;

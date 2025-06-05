import Image from "next/image";
import bg from "../../../public/images/jonior/product-list/illustration-empty-cart.svg";
import remove from "../../../public/images/jonior/product-list/icon-remove-item.svg";
import iconCarbon from "../../../public/images/jonior/product-list/icon-carbon-neutral.svg";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/_context/ProductListProvider";

interface Product {
  id: number;
  title: string;
  detail: string;
  price: number;
  img: string;
  quantity?: number;
}

function Order() {
  const { cart, removeFromCart, getTotal } = useProduct();

  return (
    <div className="rounded-md col-span-2 px-6">
      <div className="bg-primary-800 text-primary-50 rounded-md p-6">
        <h3 className="text-red-500 font-bold text-xl">
          Your Cart ({cart.length})
        </h3>

        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center my-4">
            <Image src={bg} width={128} height={128} alt="Empty cart" />
            <span className="mt-4 font-semibold text-primary-300">
              Your added items will appear here
            </span>
          </div>
        ) : (
          <>
            {cart.map((item: Product) => (
              <div
                key={item.id}
                className="gap-1 mt-6 border-b border-b-primary-600 pb-2"
              >
                <div className="flex justify-between">
                  <div>
                    <span className="font-semibold text-primary-200">
                      {item.detail}
                    </span>
                    <div className="flex gap-3">
                      <span className="font-semibold text-red-400">
                        {item.quantity}x
                      </span>
                      <span className="font-semibold text-primary-300">
                        @ ${item.price.toFixed(2)}
                      </span>
                      <span className="text-primary-100 font-bold">
                        ${(item.price * (item.quantity || 0)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <Image
                    src={remove}
                    width={16}
                    height={16}
                    alt="Remove item"
                    className="row-span-2 cursor-pointer hover:scale-105"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <span className="text-primary-400">Order Total</span>
              <span className="text-primary-50 font-bold text-xl">
                ${getTotal().toFixed(2)}
              </span>
            </div>

            <div className="bg-primary-700 rounded-md mt-4 px-4 py-2 text-center text-sm flex gap-2">
              <Image
                src={iconCarbon}
                width={16}
                height={16}
                alt="Carbon neutral"
                className="row-span-2 cursor-pointer hover:scale-105"
              />
              <p>
                This is a <span className="font-bold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>

            <Button className="bg-red-500 rounded-2xl w-full mt-8 hover:bg-red-600 cursor-pointer">
              Confirm Order
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Order;

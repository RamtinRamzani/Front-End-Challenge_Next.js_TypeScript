import Image from "next/image";
import bg from "../../../public/images/jonior/product-list/illustration-empty-cart.svg";
import remove from "../../../public/images/jonior/product-list/icon-remove-item.svg";
import iconCarbon from "../../../public/images/jonior/product-list/icon-carbon-neutral.svg";
import { Button } from "@/components/ui/button";

function Order() {
  return (
    <div className="rounded-md col-span-2 px-6">
      <div className="bg-primary-800 text-primary-50 rounded-md p-6">
        <h3 className="text-red-500 font-bold text-xl">Your Cart (*)</h3>

        {/* EMTHY ORDER */}
        <div className="flex flex-col justify-center items-center my-4">
          <Image src={bg} width={128} height={128} alt="piec" />
          <span className="mt-4 font-semibold text-primary-300">
            Your added items will apper here
          </span>
        </div>

        {/*ADDED ORDER */}

        <div className="gap-1 mt-6 border-b border-b-primary-600 pb-2">
          <div className="flex justify-between">
            <div>
              <span className="font-semibold text-primary-200">
                Classic Tiramisu
              </span>
              <div className="flex gap-3">
                <span className="font-semibold text-red-400">4X</span>
                <span className="font-semibold text-primary-300">$7.00</span>
                <span className="text-primary-100 font-bold">28.00</span>
              </div>
            </div>

            <Image
              src={remove}
              width={16}
              height={16}
              alt="delete"
              className="row-span-2 cursor-pointer hover:scale-105"
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <span className="text-primary-400">Order Total</span>
          <span className="text-primary-50 font-bold text-xl">$46.5</span>
        </div>

        <div className="bg-primary-700 rounded-md mt-4 px-4 py-2 text-center text-sm flex gap-2">
          <Image
            src={iconCarbon}
            width={16}
            height={16}
            alt="delete"
            className="row-span-2 cursor-pointer hover:scale-105"
          />
          <p>
            This is a <span className="font-bold">carbon-neutral </span>
            delivery
          </p>
        </div>

        <Button className="bg-red-500 rounded-2xl w-full mt-8 hover:bg-red-600 cursor-pointer">
          Confirm Order
        </Button>
      </div>
    </div>
  );
}

export default Order;

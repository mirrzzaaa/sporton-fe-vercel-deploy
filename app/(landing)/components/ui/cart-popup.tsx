"use client";

import priceFormater from "@/app/utils/price-formater";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/dist/client/components/navigation";
import useCartStore from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

export const cartList = [
    {
        name: "SportsOn Hyperfast Shoes",
        categoru: "Running",
        price: 450000,
        qty: 2,
        imgUrl: "product-3.png",
    },
    {
        name: "SportsOn Rockets Tennis",
        categoru: "Tennis",
        price: 450000,
        qty: 1,
        imgUrl: "product-2.png",
    },
    {
        name: "SportsOn Slowliving",
        categoru: "Running",
        price: 450000,
        qty: 5,
        imgUrl: "product-1.png",
    },
    {
        name: "SportsOn Slowliving",
        categoru: "Running",
        price: 450000,
        qty: 5,
        imgUrl: "product-1.png",
    }
];


const CartPopup = () => {
    const { push } = useRouter();

    const { items, removeItem } = useCartStore();

    console.log("cart item", items);

    const handleCheckOut = () => {
        push("/checkout");
    }


    const totalPrice = items.reduce((total, item) => total + (item.price * item.qty), 0);


    return (
        <div className="absolute bg-white right-0 top-16 shadow-xl shadow-black/10 border border-gray-200 w-90">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>
            <div className="overflow-auto max-h-76">
                {items.length ? (
                    items.map((item, index) => (

                        <div className="border-b border-gray-200 p-4 flex gap-3" key={index}>
                            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                                <Image
                                    src={getImageUrl(item.imageUrl)}
                                    width={63}
                                    height={63}
                                    alt={item.name}
                                    className="aspect-square object-contain"
                                />
                            </div>
                            <div className="self-center">
                                <div className="text-sm font-medium">{item.name}</div>
                                <div className="flex gap-3 font-medium text-xs">
                                    <div>{item.qty}x</div>
                                    <div className="text-primary">{priceFormater(item.price)}</div>
                                </div>
                            </div>
                            <Button
                                size="small"
                                variant="ghost"
                                className="w-7 h-7 p-0! self-center ml-auto"
                                onClick={() => removeItem(item._id)}
                            >
                                <FiTrash2 />
                            </Button>
                        </div>

                    ))
                ) : (
                    <div className="text-center opacity-50 py-5">
                        Your shopping cart is empty
                    </div>
                )}
            </div>

            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between text-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-sm">{priceFormater(totalPrice)}</div>
                </div>
                <div className="mt-4">
                    <Button variant="dark" className="w-full"
                        onClick={(handleCheckOut)}
                    >
                        Checkout Now <FiArrowRight /></Button>
                </div>
            </div>
        </div>
    );
}

export default CartPopup;
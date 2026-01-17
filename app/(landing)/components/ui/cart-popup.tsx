import priceFormater from "@/app/utils/proce-formater";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";

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
    const totalPrice = cartList.reduce((total, item) => total + (item.price * item.qty), 0);


    return (
        <div className="absolute bg-white right-0 top-16 shadow-xl shadow-black/10 border border-gray-200 w-90 ">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>
            <div className="overflow-auto max-h-75">
                {
                    cartList.map((item, index) => (
                        <div key={index} className="flex gap-3 p-4 border-b border-gray-200">
                            <div className="w-16 aspect-square h-16 bg-primary-light flex justify-center items-center">
                                <Image src={`/images/products/${item.imgUrl}`} alt={item.name} width={50} height={50} className="object-contain aspect-square" />
                            </div>
                            <div className="self-center">
                                <div className="font text-sm font-medium">{item.name}</div>
                                <div className="flex gap-3">
                                    <div className="font-medium text-xs flex gap-3 items-center">{item.qty}x</div>
                                    <div className="text-primary">{priceFormater(item.price)}</div>
                                </div>
                            </div>
                            <Button size="small" variant="ghost" className="w-7 h-7 p-0! self-center ml-auto" >
                                <FiTrash2 />
                            </Button>
                        </div>
                    ))
                }
            </div>

            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between text-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-sm">{priceFormater(totalPrice)}</div>
                </div>
                <div className="mt-4">
                    <Button variant="dark" className="w-full">Checkout Now <FiArrowRight /></Button>
                </div>
            </div>
        </div>
    );
}

export default CartPopup;
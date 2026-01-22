"use client";

import priceFormater from "@/app/utils/price-formater";
import Button from "../ui/button";
import Image from "next/image";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/dist/client/components/navigation";
import useCartStore from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";


type TCartItem = {
    handlePayment: () => void;
};

const CartItem = ({ handlePayment }: { handlePayment: () => void }) => {
    const { items, removeItem } = useCartStore();

    const totalPrice = items.reduce((total, item) => total + (item.price * item.qty), 0);



    return (
        <CardWithHeader title="Cart Items">
            <div className="overflow-auto max-h-76 flex flex-col justify-between">
                {items.map((item) => (
                    <div key={item._id} className="flex gap-3 p-4 border-b border-gray-200">
                        <div className="w-16 aspect-square h-16 bg-primary-light flex justify-center items-center">
                            <Image src={getImageUrl(item.imageUrl)}
                                alt={item.name} width={50} height={50}
                                className="object-contain aspect-square" />
                        </div>
                        <div className="self-center">
                            <div className="font text-sm font-medium">{item.name}</div>
                            <div className="flex gap-3">
                                <div className="font-medium text-xs flex gap-3 items-center">{item.qty}x</div>
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
                }
            </div>
            <div className="border-t border-gray-200 p-4 mt-1">
                <div className="flex justify-between text-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-sm">{priceFormater(totalPrice)}</div>
                </div>
                <div className="mt-4">
                    <Button variant="dark" className="w-full" onClick={handlePayment}>Proceed to Payment <FiCreditCard /></Button>
                </div>
            </div>

        </CardWithHeader>
    )
};

export default CartItem;
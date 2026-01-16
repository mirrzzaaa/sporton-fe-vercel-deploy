"use client"

import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi"
import Button from "../ui/button"
import { useState } from "react";

const ProductAction = () => {
    const [qty, setQty] = useState(1); //untuk data reaktif, apa yang kita isi sesuai dengan yang ditampilkan pada ui


    return (
        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center">

            <div className="flex h-14 w-fit overflow-hidden border border-gray-500">
                <div className="flex w-12 aspect-square items-center justify-center border-r border-gray-500 font-medium">
                    <span>{qty}</span>
                </div>

                <div className="flex flex-col w-12">
                    <button className="flex cursor-pointer aspect-square items-center justify-center border-b border-gray-500 h-1/2"
                        onClick={() => setQty(qty + 1)}
                    >
                        <FiChevronUp />
                    </button>
                    <button className="flex cursor-pointer aspect-square h-1/2 items-center justify-center"
                        onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
                    >
                        <FiChevronDown />
                    </button>
                </div>
            </div>

            <Button className="flex w-full items-center justify-center gap-2 lg:w-auto">
                <FiShoppingBag size={20} />
                Add to Cart
            </Button>

            <Button
                variant="dark"
                className="flex w-full items-center justify-center gap-2 lg:w-auto"
            >
                Checkout Now
                <FiArrowRight />
            </Button>
        </div>

    )
}


export default ProductAction
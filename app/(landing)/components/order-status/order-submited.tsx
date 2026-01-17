"use client";

import { FiRefreshCw } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const OrderSubmited = () => {

    const reloadOrderStatus = () => {
        window.location.reload();
    }

    return (
        <div className="bg-white md:w-160 p-16 flex flex-justify-center items-center flex-col shadow-md md:mx-auto mx-5 ">
            <Image src="/images/icon-order-submitted.svg" alt="order submited" width={117} height={117} className="mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Order Submitted!</h2>
            <p className="text-center mb-8" >Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.</p>
            <div className="w-full">
                <Button variant="dark" className="w-full" onClick={reloadOrderStatus}><FiRefreshCw /> Refresh Order Status</Button>
            </div>
        </div>
    )
}
export default OrderSubmited;
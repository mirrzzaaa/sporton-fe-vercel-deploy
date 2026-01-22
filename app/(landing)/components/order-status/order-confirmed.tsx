"use client";
import Image from "next/image";

const OrderConfirm = () => {
    return (
        <div className="bg-white md:w-160 p-16 flex flex-justify-center items-center flex-col shadow-md md:mx-auto mx-5 ">
            <Image src="/images/icon-order-confirmed.svg" alt="order confirmed" width={117} height={117} className="mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Order Confirmed!</h2>
            <p className="text-center mb-8" >
                We have received your payment, and your order is currently processed by ssour staff,
                just wait until your favorite sportswear arrive in your home.
                We will contact you in Whatsapp for further shipping updates.
            </p>
        </div>
    )
}
export default OrderConfirm;
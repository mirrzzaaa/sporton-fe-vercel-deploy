"use client";

import OrderInformation from "../components/checkout/order-information";
import CartItem from "../components/checkout/cart-item";
import { useState } from "react";
import { CustomerInfo } from "@/app/hooks/use-cart-store";
import { useRouter } from "next/dist/client/components/navigation";
import useCartStore from "@/app/hooks/use-cart-store";

const Chekout = () => {
    const { push } = useRouter();
    const { setCustomerInfo } = useCartStore();
    const [formData, setFormData] = useState<CustomerInfo>({
        customerName: "",
        customerContact: null,
        customerAddress: "",
    });

    const handlePayment = () => {
        if (!formData.customerName || !formData.customerContact || !formData.customerAddress) {
            alert("Please fill in all the required fields.");
            return;
        }

        setCustomerInfo(formData);
        push("/payment");
    }

    return (
        <main className="bg-gray-100 min-h-[80vh] pt-20">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="text-5xl font-bold text-center mb-10">
                    Checkout Now
                </h1>
                <div className="flex flex-col md:flex-row gap-10 px-14 w-full justify-center">
                    <OrderInformation formData={formData} setFormData={setFormData} />
                    <CartItem handlePayment={handlePayment} />

                </div>
            </div>
        </main>
    )
};

export default Chekout;
"use client";

import { useState } from "react";
import OrderSubmited from "../../components/order-status/order-submited";
import OrderConfirm from "../../components/order-status/order-confirmed";

const OrderStatus = () => {
    const [isConfirmed, setIsConfirmed] = useState(false); // Temporary hardcoded value for demonstration

    return (
        <main className="bg-gray-100 min-h-[125vh]">
            <div className="max-w-5xl mx-auto py-20 px-14">
                <h1 className="text-5xl font-bold text-center">
                    Order Status
                </h1>
            </div>
            {
                isConfirmed ? <OrderConfirm /> : <OrderSubmited />
            }
        </main>
    )
};
export default OrderStatus;
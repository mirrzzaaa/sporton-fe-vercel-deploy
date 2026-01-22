"use client";

import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import { cartList } from "../ui/cart-popup";
import FileUpload from "../ui/file-upload";
import priceFormater from "@/app/utils/price-formater";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/dist/client/components/navigation";
import { useState } from "react";
import useCartStore from "@/app/hooks/use-cart-store";
import { transactionCheckout } from "@/app/services/transaction.service";

const PaymentStep = () => {
    const totalPrice = cartList.reduce((total, item) => total + (item.price * item.qty), 0);


    const { push } = useRouter();
    const [file, setFile] = useState<File | null>(null);
    const { items, customerInfo, reset } = useCartStore();


    const handleConfirmPayment = async () => {
        if (!file) {
            alert("Please upload your payment receipt before confirming.");
            return;
        }
        if (!customerInfo) {
            alert("Customer information is missing. Please return to checkout.");
            push("/checkout");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("customerName", customerInfo.customerName);
            formData.append("customerContact", customerInfo.customerContact!.toString());
            formData.append("customerAddress", customerInfo.customerAddress);
            formData.append("image", file);
            formData.append("purchasedItems",
                JSON.stringify(items.map((item) => ({
                    productId: item._id,
                    qty: item.qty,
                })))
            );
            formData.append("totalPayment", totalPrice.toString());

            const res = await transactionCheckout(formData);
            push(`/order-status/${res._id}`);
            reset();
            console.log("Payment confirmed successfully:", res);

        } catch (error) {
            console.error("Error confirming payment:", error);
            alert("There was an error confirming your payment. Please try again.");
            return;
        }
    }

    return (
        <CardWithHeader title="Payment Step">
            <div className="p-5">
                <ol className="list-decimal text-xs pl-2 flex flex-col gap-4 mb-6">
                    <li>
                        Transfer the total amount of <b>{priceFormater(totalPrice)}</b> to your preferred bank account listed under `Payment Options` (BCA, Mandiri, or BTPN).
                    </li>
                    <li>
                        After completing the transfer, <b>keep the payment receipt</b> or a screenshot of the transfer confirmation. This will be needed for the next step.
                    </li>
                    <li>
                        Upload the payment receipt/screenshot using the <b>`Upload Receipt & Confirm`</b> button below to validate your transaction.
                    </li>
                </ol>
                <FileUpload onFileSelect={setFile} />
            </div>
            <div className="border-t border-gray-200 p-4 mt-1">
                <div className="flex justify-between text-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-sm">{priceFormater(totalPrice)}</div>
                </div>
                <div className="mt-4">
                    <Button variant="dark" className="w-full" onClick={(handleConfirmPayment)}> <FiCheckCircle /> Upload Receipt & Confirm</Button>
                </div>
            </div>
        </CardWithHeader>
    );
}
export default PaymentStep;
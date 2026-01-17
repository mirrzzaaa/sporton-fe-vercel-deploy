"use client";

import Button from "../ui/button";
import CardWithHeader from "../ui/card-with-header";
import { cartList } from "../ui/cart-popup";
import FileUpload from "../ui/file-upload";
import priceFormater from "@/app/utils/price-formater";
import { FiCheckCircle } from "react-icons/fi";
import { useRouter } from "next/dist/client/components/navigation";

const PaymentStep = () => {
    const totalPrice = cartList.reduce((total, item) => total + (item.price * item.qty), 0);
    const { push } = useRouter();
    const uploadAndConfirm = () => {
        push("/order-status/12345");
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
                <FileUpload />
            </div>
            <div className="border-t border-gray-200 p-4 mt-1">
                <div className="flex justify-between text-semibold">
                    <div className="text-sm">Total</div>
                    <div className="text-primary text-sm">{priceFormater(totalPrice)}</div>
                </div>
                <div className="mt-4">
                    <Button variant="dark" className="w-full" onClick={(uploadAndConfirm)}> <FiCheckCircle /> Upload Receipt & Confirm</Button>
                </div>
            </div>
        </CardWithHeader>
    );
};
export default PaymentStep;
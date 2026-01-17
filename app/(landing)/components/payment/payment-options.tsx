import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const paymentList = [
    {
        bank_name: "BCA",
        account_number: 123123123123,
        account_holder: "PT Sports0n Digital"
    },
    {
        bank_name: "MAndiri",
        account_number: 123123123123,
        account_holder: "PT Sports0n Digital"
    },
    {
        bank_name: "BRI",
        account_number: 123123123123,
        account_holder: "PT Sports0n Digital"
    }
]

const PaymentOption = () => {
    return <CardWithHeader title="Payment Options">{
        paymentList.map((payment, index) => (
            <div key={index}>
                <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
                    <div className="bg-blue-100 p-4  text-blue-500 h-fitt self-center">
                        <FiCreditCard size={24} />
                    </div>
                    <div className="self-center">
                        <div className="font-bold">{payment.bank_name}</div>
                        <div className="text-sm">{payment.account_number}</div>
                        <div className="text-sm opacity-70">{payment.account_holder}</div>
                    </div>
                    <div className="ml-auto bg-blue-50 text-gray-800 text-xs w-fit h-fit p-2">
                        Bank Transfer
                    </div>
                </div>
            </div>
        ))
    }
    </CardWithHeader>;
};
export default PaymentOption;
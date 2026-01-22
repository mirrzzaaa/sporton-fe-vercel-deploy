import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { getAllBanks } from "@/app/services/bank.service";

const PaymentOption = async () => {
    const banks = await getAllBanks();

    return (
        <CardWithHeader title="Payment Options">
            <div className="overflow-auto max-h-90
            ">
                {banks.map((payment, index) => (
                    <div
                        key={index}
                        className="flex gap-5 p-5 border-b border-gray-100"
                    >
                        <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                            <FiCreditCard size={24} />
                        </div>

                        <div className="self-center text-black">
                            <div className="font-bold">{payment.bankName}</div>
                            <div className="text-sm">{payment.accountNumber}</div>
                            <div className="text-sm opacity-70">
                                {payment.accountName}
                            </div>
                        </div>

                        <div className="ml-auto bg-blue-50 text-gray-800 text-xs w-fit h-fit p-2 self-center">
                            Bank Transfer
                        </div>
                    </div>
                ))}
            </div>
        </CardWithHeader>
    );
};

export default PaymentOption;

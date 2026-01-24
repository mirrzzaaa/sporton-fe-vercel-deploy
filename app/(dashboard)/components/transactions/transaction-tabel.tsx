import React from "react";
import Image from "next/image";
import priceFormater from "@/app/utils/price-formater";
import { FiEye } from "react-icons/fi";


const transactionData = [
    {
        date: "Product 1",
        customer: "Raina",
        contact: "0987656790",
        total: 289000,
        status: "pending",
    },
    {
        date: "Product 1",
        customer: "Raina",
        contact: "0987656790",
        total: 289000,
        status: "rejected",
    },
    {
        date: "Product 1",
        customer: "Raina",
        contact: "0987656790",
        total: 289000,
        status: "paid",
    },
]

type TTransactionTableProps = {
    onViewDetails: () => void;
}

const TransactionTable = ({ onViewDetails }: TTransactionTableProps) => {
    const getStatusColor = (status: string) => {
        switch (status.toLocaleLowerCase()) {
            case "pending":
                return "bg-yellow-100 text-yellow-600 border-yellow-300";
            case "rejected":
                return "bg-red-100 text-red-600 border-red-300";
            case "paid":
                return "bg-green-100 text-green-600 border-green-300";
        }
    }
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <div className="max-h-120 overflow-y-auto">
                <table className="w-full border-collapse text-left">
                    <thead className="sticky top-0 bg-white z-10">
                        <tr className="border-b border-gray-200">
                            <th className="py-4 px-6 font-semibold">Date</th>
                            <th className="py-4 px-6 font-semibold">Customer</th>
                            <th className="py-4 px-6 font-semibold">Contact</th>
                            <th className="py-4 px-6 font-semibold">Total</th>
                            <th className="py-4 px-6 font-semibold">Status</th>
                            <th className="py-4 px-6 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactionData.map((data, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-100 last:border-b-0"
                            >
                                <td className="py-4 px-6 font-medium">
                                    <span>{data.date}</span>
                                </td>
                                <td className="py-4 px-6 font-medium">
                                    {data.customer}
                                </td>
                                <td className="py-4 px-6 font-medium">
                                    <span>{data.contact}</span>
                                </td>
                                <td className="py-4 px-6 font-medium">
                                    {priceFormater(data.total)}
                                </td>
                                <td className="py-4 px-6 font-medium">
                                    <div className={`px-4 py-1 rounded-full border text-center w-fit text-sm ${getStatusColor(data.status)}`}>
                                        {data.status}
                                    </div>
                                </td>
                                <td className="px--6 py-7.5 flex items-center gap-3 text-gray-600 ">
                                    <button onClick={onViewDetails} className="flex gap-2 cursor-pointer hover:bg-gray-100 w-fit px-2 py-2 rounded-md">
                                        <FiEye size={20} color="blue" />View Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default TransactionTable;
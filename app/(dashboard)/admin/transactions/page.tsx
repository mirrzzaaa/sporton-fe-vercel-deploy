"use client";

import TransactiontModal from "../../components/transactions/transaction-modal";
import TransactionTable from "../../components/transactions/transaction-tabel";
import { useState } from "react";


const TransactionManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    const handleViewDetails = () => {
        setIsOpen(true);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold">Transaction</h1>
                    <p className="opacity-50">
                        Verify incoming payments and manage orders.
                    </p>
                </div>
            </div>
            <TransactionTable onViewDetails={handleViewDetails} />
            <TransactiontModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default TransactionManagement;
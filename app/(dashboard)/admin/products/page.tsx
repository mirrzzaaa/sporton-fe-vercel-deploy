"use client";

import { FiPlus } from "react-icons/fi";
import Button from "@/app/(landing)/components/ui/button";
import ProductTable from "../../components/products/products-tabel";
import ProductModal from "../../components/products/products-modal";
import { useState } from "react";

const ProductManagement = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold">Products Management</h1>
                    <p className="opacity-50">
                        Manage your inventory, prices and stock
                    </p>
                </div>
                <Button className="rounded-xl" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} /> Add Product
                </Button>
            </div>
            <ProductTable />
            <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    );
}

export default ProductManagement;
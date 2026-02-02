"use client";

import { FiPlus } from "react-icons/fi";
import Button from "@/app/(landing)/components/ui/button";
import ProductTable from "../../components/products/products-tabel";
import ProductModal from "../../components/products/products-modal";
import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import { deleteProduct, getAllProducts } from "@/app/services/product.service";
import DeleteModal from "../../components/ui/delete-modal";




const ProductManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [productDeleteId, setProductDeleteId] = useState("");

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            if (data) setProducts(data);
        } catch (error) {
            console.error("FETCH PRODUCTS ERROR:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProducts();
            setProducts(data);
        };
        fetchData();
    }, []);

    const handleEdit = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true)
    }

    const handleDelete = (id: string) => {
        setProductDeleteId(id);
        setIsDeleteModalOpen(true)
    }

    const handleDeleteConfirm = async () => {
        if (!productDeleteId) return;
        try {
            await deleteProduct(productDeleteId);
            await fetchProducts();
            setIsDeleteModalOpen(false);
            setProductDeleteId("");
        } catch (err) {
            console.error("failed to delete product", err);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-bold">Products Management</h1>
                    <p className="opacity-50">
                        Manage your inventory, prices and stock
                    </p>
                </div>
                <Button className="rounded-xl" onClick={() => setIsModalOpen(true)}>
                    <FiPlus size={24} /> Add Product
                </Button>
            </div>

            <ProductTable
                products={products}
                onEdit={handleEdit}
                onDelete={handleDelete} />

            <ProductModal
                product={selectedProduct}
                onSuccess={fetchProducts}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)} />

            <DeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDeleteConfirm}

            />
        </div>
    );
};


export default ProductManagement;
import React from "react";
import Image from "next/image";
import priceFormater from "@/app/utils/price-formater";
import { FiEdit2, FiTrash2 } from "react-icons/fi";


const productData = [
    {
        name: "Product 1",
        imageurl: "/images/products/product-1.png",
        category: "Running",
        price: 289000,
        stock: 50
    },
    {
        name: "Product B",
        imageurl: "/images/products/product-2.png",
        category: "Running",
        price: 150000,
        stock: 30
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
    {
        name: "Product C",
        imageurl: "/images/products/product-3.png",
        category: "Category 1",
        price: 2000000,
        stock: 20
    },
]

const ProductTable = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <div className="max-h-120 overflow-y-auto">
                <table className="w-full border-collapse text-left">
                    <thead className="sticky top-0 bg-white z-10">
                        <tr className="border-b border-gray-200">
                            <th className="py-4 px-6 font-semibold">Product Name</th>
                            <th className="py-4 px-6 font-semibold">Category</th>
                            <th className="py-4 px-6 font-semibold">Price</th>
                            <th className="py-4 px-6 font-semibold">Stock</th>
                            <th className="py-4 px-6 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productData.map((data, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-100 last:border-b-0"
                            >
                                <td className="py-4 px-6 font-medium">
                                    <div className="flex gap-2 items-center">
                                        <Image
                                            src={data.imageurl}
                                            alt={data.name}
                                            width={52}
                                            height={52}
                                            className="object-contain"
                                        />
                                        <span>{data.name}</span>
                                    </div>
                                </td>
                                <td className="py-4 px-6 font-medium">
                                    <span className="bg-gray-200 px-2 py-1 rounded-md">
                                        {data.category}
                                    </span>
                                </td>
                                <td className="py-4 px-6 font-medium">
                                    {priceFormater(data.price)}
                                </td>
                                <td className="py-4 px-6 font-medium">
                                    {data.stock} units
                                </td>
                                <td className="flex gap-3 items-center px-6 py-8">
                                    <button>
                                        <FiEdit2 size={20} color="orange" />
                                    </button>
                                    <button>
                                        <FiTrash2 size={20} color="red" />
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


export default ProductTable;
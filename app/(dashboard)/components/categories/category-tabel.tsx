import React from "react";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";


const CategoryData = [
    {
        name: "Running",
        imageurl: "/images/categories/category-running.png",
        description: "lorem"
    },
    {
        name: "Football",
        imageurl: "/images/categories/category-football.png",
        description: "lorem"
    },
]

const CategoryTable = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <div className="max-h-120 overflow-y-auto">
                <table className="w-full border-collapse text-left">
                    <thead className="sticky top-0 bg-white z-10">
                        <tr className="border-b border-gray-200">
                            <th className="py-4 px-6 font-semibold">Category</th>
                            <th className="py-4 px-6 font-semibold">Description</th>
                            <th className="py-4 px-6 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {CategoryData.map((data, index) => (
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
                                    {data.description}
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


export default CategoryTable;
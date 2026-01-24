"use client";

import Image from "next/image";
import Link from "next/link";
import { FiBox, FiCreditCard, FiLayers, FiLogOut, FiShoppingCart } from "react-icons/fi";
import React from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        {
            name: "Products",
            icon: FiBox,
            Link: "/admin/products"
        },
        {
            name: "Categories",
            icon: FiLayers,
            Link: "/admin/categories"
        },
        {
            name: "Transactions",
            icon: FiShoppingCart,
            Link: "/admin/transactions"
        },
        {
            name: "Bank Information",
            icon: FiCreditCard,
            Link: "/admin/bank-information"
        }
    ];

    return (
        <aside className="w-80 bg-white shadow-md border-r border-gray-100 flex flex-col fixed left-0 top-0 bottom-0">
            <div className="py-8 px-14 border-b border-gray-200 ">
                <Image src="/images/logo-admin.svg" alt="Logo Admin" width={215} height={36} />
            </div>
            <div className="flex flex-col gap-2 mt-12 p-5 cursor-pointer">
                {menuItems.map((item, index) => {
                    const isActive = item.Link === pathname;

                    return (
                        <Link href={item.Link} key={index} className={`flex gap-3 items-center py-3 px-4.5 rounded-lg font-medium duration-300 
                        ${isActive ? "bg-primary/15 text-primary" : "hover:bg-gray-100"}`}>
                            <item.icon size={24} />
                            <span>{item.name}</span>
                        </Link>
                    )
                }
                )}
            </div>
            <Link href='#' className={`flex gap-3 items-center py-3 px-4.5 mx-5 rounded-lg font-medium duration-300 
                        hover:bg-gray-100 mt-auto mb-8`}>
                <FiLogOut />
                Logout
            </Link>
        </aside>
    );
};

export default Sidebar;
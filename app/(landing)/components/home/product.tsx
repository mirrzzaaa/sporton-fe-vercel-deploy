"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormater from "@/app/utils/price-formater";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import useCartStore from "@/app/hooks/use-cart-store";


type TproductSectionProps = {
    products: Product[];
}

const ProductSection = ({ products }: TproductSectionProps) => {
    const { addItem } = useCartStore();

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
    }

    return (
        <section id="products-section" className="container mx-auto px-20 mt-20 mb-20">
            <h2
                className="font-bold italic text-center mb-10
        text-2xl sm:text-3xl md:text-4xl"
            >
                <span className="text-primary">OUR </span>
                PRODUCT
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {/*productcard*/}
                {products.map((product) => (
                    <Link
                        href={`/product/${product._id}`}
                        key={product._id}
                        className="p-1.5 bg-white hover:drop-shadow-xl duration-300 group px-3 py-4"
                    >
                        <div
                            className="p-2 bg-primary-light rounded-xl 
                            aspect-square flex items-center justify-center
                            transition group-hover:scale-105 relative"
                        >
                            <Image
                                src={getImageUrl(product.imageUrl)}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="aspect-square object-contain"
                            />
                            <Button className="w-10 h-10 p-2! absolute right-3 top-3" onClick={(e) => handleAddToCart(e, product)}>
                                <FiPlus size={24} />
                            </Button>
                        </div>

                        <h3 className="font-medium text-base mb-1.5 mt-4">{product.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-8 gap-1 sm:gap-2">
                            <div className="text-gray-500">{product.category.name}</div>
                            <div className="font-medium text-primary">{priceFormater(product.price)}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section >
    );
};

export default ProductSection;

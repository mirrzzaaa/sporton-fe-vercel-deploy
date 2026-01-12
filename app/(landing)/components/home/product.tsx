import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
    {
        name: "SportsOn Hyperfast Shoes",
        categoru: "Running",
        price: 450000,
        imgUrl: "product-3.png",
    },
    {
        name: "SportsOn Rockets Tennis",
        categoru: "Tennis",
        price: 450000,
        imgUrl: "product-2.png",
    },
    {
        name: "SportsOn Slowliving",
        categoru: "Running",
        price: 450000,
        imgUrl: "product-1.png",
    },
    {
        name: "SportsOn HyperSoccer v2",
        categoru: "Football",
        price: 450000,
        imgUrl: "product-4.png",
    },
    {
        name: "SportsOn Slowlivin v2",
        categoru: "Running",
        price: 450000,
        imgUrl: "product-5.png",
    },
    {
        name: "SportsOn Basketball Pro",
        categoru: "basketball",
        price: 450000,
        imgUrl: "product-6.png",
    },
    {
        name: "SportsOn Rockets Tennis v2",
        categoru: "Tennis",
        price: 450000,
        imgUrl: "product-7.png",
    },
    {
        name: "SportsOn HyperSoccer v3",
        categoru: "Football",
        price: 450000,
        imgUrl: "product-8.png",
    },
]

const ProductSection = () => {
    return (
        <section id="products-section" className="container mx-auto px-4 mt-20">

            <h2 className="font-bold italic text-center mb-10
        text-2xl sm:text-3xl md:text-4xl">
                <span className="text-primary">OUR </span>
                PRODUCT
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">

                {/*productcard*/}
                {productList.map((product, index) => (
                    <Link href="#" key={index}
                        className="p-1.5 bg-white hover:drop-shadow-xl duration-300 group">

                        <div className="p-2 bg-primary-light rounded-xl aspect-square flex items-center justify-center
              transition group-hover:scale-105">

                            <Image
                                src={`/images/products/${product.imgUrl}`}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="aspect-square object-contain"
                            />
                            <Button className="w-10 h-10 p-2! absolute right-3 top-3 ">
                                <FiPlus size={24} />
                            </Button>
                        </div>

                        <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                        <div className="flex justify-between mb-8">
                            <div className="text-gray-500">{product.categoru}</div>
                            <div className="font-medium text-primary">
                                {Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    maximumSignificantDigits: 3,
                                }).format(product.price)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProductSection;
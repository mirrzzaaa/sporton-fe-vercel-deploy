import Image from "next/image";
import style from "styled-jsx/style";
import ProductAction from "../../components/product-detail/product-action";

const ProductDetail = () => {
    return (
        <main className="container mx-auto py-40 flex flex-col md:flex-row gap-12 px-15 items-center md:items-start">
            <div className="bg-primary-light aspect-square min-w-120 flex justify-center items-center">
                <Image
                    src="/images/products/product-1.png"
                    width={350}
                    height={350}
                    alt="Product Image"
                    className="aspect-square object-contain w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">Product Name</h1>
                <div className="bg-primary-light text-primary w-fit rounded-full px-5 py-2">Football</div>
                <p className="leading-loose mb-8">
                    The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats
                    dont just perform—they make a statement. Experience the future of football footwear with v2s
                    enhanced fit and cutting-edge traction.
                </p>
                <div className="text-primary text-[32px] font-semibold mb-12">
                    {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 3
                    }).format(350000)}
                </div>
                <ProductAction />
            </div>


        </main>

    );
}
export default ProductDetail;
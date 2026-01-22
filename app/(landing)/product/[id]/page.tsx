import Image from "next/image";
import ProductAction from "../../components/product-detail/product-action";
import { getImageUrl } from "@/app/lib/api";
import { getProductDetail } from "@/app/services/product.service";
import priceFormater from "@/app/utils/price-formater";

export type TPageProps = {
    params: Promise<{ id: string }>;
}

const ProductDetail = async ({ params }: TPageProps) => {
    const { id } = await params;

    const product = await getProductDetail(id);
    console.log(product);

    return (
        <main className="container mx-auto py-40 flex flex-col md:flex-row gap-12 px-15 items-center md:items-start">
            <div className="bg-primary-light aspect-square min-w-120 flex justify-center items-center">
                <Image
                    src={getImageUrl(product.imageUrl)}
                    width={350}
                    height={350}
                    alt={product.name}
                    className="aspect-square object-contain w-full"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
                <div className="bg-primary-light text-primary w-fit rounded-full px-5 py-2">
                    {product.category.name}
                </div>
                <p className="leading-loose mb-8">
                    {product.description}
                </p>
                <div className="text-primary text-[32px] font-semibold mb-12">
                    {priceFormater(product.price)}
                </div>
                <ProductAction product={product} stock={product.stock} />
            </div>


        </main>

    );
}
export default ProductDetail;
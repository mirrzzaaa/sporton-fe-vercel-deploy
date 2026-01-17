import OrderInformation from "../components/checkout/order-information";
import CartItem from "../components/checkout/cart-item";

const Chekout = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh]">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="text-5xl font-bold text-center mb-10">
                    Checkout Now
                </h1>
                <div className="flex flex-col md:flex-row gap-10 px-14 w-full justify-center">
                    <OrderInformation />
                    <CartItem />
                </div>
            </div>
        </main>
    )
};

export default Chekout;
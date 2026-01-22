import PaymentOption from "../components/payment/payment-options";
import PaymentStep from "../components/payment/payment-step";

const Payment = () => {
    return (
        <main className="bg-gray-100 min-h-[80vh] pt-20">
            <div className="max-w-5xl mx-auto py-20">
                <h1 className="text-5xl font-bold text-center mb-10">
                    Payment
                </h1>
                <div className="flex flex-col md:flex-row gap-10 px-14 w-full justify-center">
                    <PaymentOption />
                    <PaymentStep />
                </div>
            </div>
        </main>
    )
};

export default Payment;
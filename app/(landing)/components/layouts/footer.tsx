import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-dark-alternate text-white mt-32">

            <div className="container mx-auto px-4 pt-14 pb-24
                flex flex-col gap-12 md:flex-row md:justify-between">

                <div className="max-w-sm">
                    <Image
                        src="/images/logo-footer.svg"
                        alt="Sporton Logo"
                        width={187}
                        height={44}
                        className="w-[110px] md:w-[127px] mb-8"
                    />
                    <p className="text-gray-300">
                        Engineered for endurance and designed for speed.
                        Experience gear that moves as fast as you do.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    <div className="flex flex-col gap-6">
                        <Link href="#">Home</Link>
                        <Link href="#">Categories</Link>
                        <Link href="#">Products</Link>
                        <Link href="#">About Us</Link>
                    </div>

                    <div className="flex flex-col gap-6">
                        <Link href="#">Instagram</Link>
                        <Link href="#">Facebook</Link>
                        <Link href="#">TikTok</Link>
                        <Link href="#">YouTube</Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/15">
                <div className="container mx-auto px-4 py-6
                    flex flex-col gap-4 md:flex-row md:justify-between">

                    <div className="text-sm text-gray-400">
                        SportsOn © 2025 All Rights Reserved.
                    </div>

                    <div className="flex gap-6 text-sm">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

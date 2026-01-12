import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative container mx-auto px-4 min-h-screen flex items-center overflow-hidden">
            <div className="relative w-full">

                {/* Basketball decorative (desktop only) dengan menambahkan "hidden lg:block" */}
                <Image
                    src="/images/img-basketball.png"
                    width={432}
                    height={423}
                    alt="image sporton"
                    className="hidden lg:block grayscale absolute left-0 -top-20"
                />

                <div className="relative lg:ml-40 max-w-4xl">
                    <div className="text-primary italic mb-2">
                        Friday Sale, 50%
                    </div>

                    <h1 className="
            font-extrabold italic leading-tight
            bg-gradient-to-b from-black to-[#979797]
            bg-clip-text text-transparent
            text-4xl sm:text-5xl md:text-6xl lg:text-[95px]
          ">
                        WEAR YOUR <br />
                        TOP-QUALITY <br />
                        SPORTSWEAR
                    </h1>

                    <p className="mt-6 lg:mt-10 max-w-xl leading-loose text-gray-700">
                        Engineered for endurance and designed for speed. Experience gear
                        that moves as fast as you do. Premium fabrics. Unmatched comfort.
                        Limitless motion.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10 lg:mt-14">
                        <Button>
                            Explore More <FiFastForward />
                        </Button>

                        <Button variant="ghost">
                            Watch Video
                            <Image
                                src="/images/icon-play-video.svg"
                                alt="icon playvideo"
                                width={24}
                                height={24}
                            />
                        </Button>
                    </div>
                </div>

                <Image
                    src="/images/img-hero.png"
                    width={700}
                    height={950}
                    alt="image sporton hero"
                    className="
            mt-12 lg:mt-0
            mx-auto lg:mx-0
            w-[280px] sm:w-[360px] md:w-[420px] lg:w-[700px]
            lg:absolute lg:-right-5 lg:top-1/2 lg:-translate-y-1/2"
                />
            </div>

            {/* Ornament (desktop only), dengan mengambahkan "hidden xl:block" */}
            <Image
                src="/images/img-ornament-hero.svg"
                width={420}
                height={420}
                alt="ornament"
                className="hidden xl:block absolute -right-[200px] top-1/2 -translate-y-1/2"
            />
        </section>
    );
};

export default HeroSection;

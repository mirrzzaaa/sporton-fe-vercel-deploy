import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
    return <header>
        <div className="flex justify-between gap-10 container mx-auto py-7 flex items-center">
            <img src="/images/logo.svg" alt="Sporton Logo" width={127} height={30} />

            <nav className="flex items-center gap-30 font-medium">
                <a href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1" >Home</a>
                <a href="#" >Category</a>
                <a href="#" >Explore Project</a>
            </nav>

            <div className="flex gap-10">
                <FiSearch size={24} />
                <div className="relative">
                    <FiShoppingBag size={24} />
                    <div className="bg-primary rounded-full w-4 h-4 flex items-center justify-center text-xs text-white absolute -top-1 -right-1 text-[9px] text-white text-center">
                        3
                    </div>
                </div>
            </div>

        </div>

    </header>;
};

export default Header;
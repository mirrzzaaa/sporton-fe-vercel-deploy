type TbuttonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, variant = "primary", size = "normal", ...props }: TbuttonProps) => {
    const baseStelys = "inline-flex gap-2 duration-300 items-center justify-center cursor-pointer hover:scale-105";

    const variantStyles = {
        primary: "bg-primary text-white hover:bg-primary/85",
        dark: "bg-dark text-white hover:bg-dark/85",
        ghost: "bg-transparent hover:bg-gray-100 text-dark"
    };
    const sizeStyles = {
        normal: "px-9 py-4",
        small: "px-7 py-[10px]"
    };
    return <button className={`${baseStelys} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}{...props}>
        {children}
    </button>;
}

export default Button;
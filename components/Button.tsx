import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant, className }) => {
  const TYPES: { [key: string]: string } = {
    default: "bg-[#007aFF] text-white",
    secondary: "bg-[#152c46] text-[#007aff]",
  };

  return (
    <button
      onClick={() => {}}
      className={twMerge(
        `px-4 py-2 ${TYPES["default"]} rounded text-sm`,
        `${className} ${variant ? TYPES[variant] : ""}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;

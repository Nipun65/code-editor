import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  className?: string;
  updates?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  updates,
}) => {
  const TYPES: { [key: string]: string } = {
    default: "bg-[#007aFF] text-white hover:opacity-90",
    secondary:
      "bg-[#152c46] text-[#007aff] hover:text-white hover:bg-[#007aFFB3]",
  };

  return (
    <button
      onClick={() => {}}
      className={twMerge(
        `px-4 py-2 ${TYPES["default"]} rounded text-sm`,
        `${className} ${variant ? TYPES[variant] : ""} relative`
      )}
    >
      {children}
      {updates && (
        <span className="absolute size-3 bg-[#FF6F50] rounded-full -right-1 -top-0.5"></span>
      )}
    </button>
  );
};

export default Button;

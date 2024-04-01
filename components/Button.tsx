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
    default: "bg-azure-500 text-white hover:bg-azure-600",
    secondary:
      "bg-yankeesblue-500 text-azure-500 hover:text-white hover:bg-azure-700",
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
        <span className="absolute size-3 bg-outrageousorange-500 rounded-full -right-1 -top-0.5"></span>
      )}
    </button>
  );
};

export default Button;

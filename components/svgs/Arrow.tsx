import { twMerge } from "tailwind-merge";

interface ArrowProps {
  fill?: string;
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ fill, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      viewBox="0 0 10 6"
      className={twMerge("min-w-[10px] min-h-[6px]", className)}
    >
      <path
        d="M9.85252 0.952477L5.54602 5.75251C5.24997 6.0825 4.75007 6.0825 4.45402 5.75251L0.147485 0.952477C-0.176068 0.591804 0.0676582 0 0.539773 0L9.46019 0C9.93234 0 10.1761 0.591804 9.85252 0.952477Z"
        fillOpacity="0.9"
        fill={fill}
      />
    </svg>
  );
};

export default Arrow;

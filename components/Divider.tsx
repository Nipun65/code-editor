import { twMerge } from "tailwind-merge";

interface DividerProps {
  className?: string;
}
const Divider: React.FC<DividerProps> = ({ className }) => {
  return <div className={twMerge("border border-gunmetal-500", className)} />;
};

export default Divider;

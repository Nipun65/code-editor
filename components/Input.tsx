interface InputProps {
  type: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ type, className }) => {
  return <input type={type} className={className} />;
};
export default Input;

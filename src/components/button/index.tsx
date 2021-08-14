interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "primary-outline"
    | "secondary-outline"
    | "text";
  icon?: string;
  type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", icon, label, className = "", ...rest } = props;

  const styles =
    variant === "primary"
      ? "bg-purple-500 hover:bg-purple-400 text-white"
      : variant === "secondary"
      ? "bg-indigo-500 hover:bg-indigo-400 text-white"
      : variant === "primary-outline"
      ? "bg-white hover:bg-gray-50 border text-black"
      : variant === "secondary-outline"
      ? "bg-white hover:bg-gray-100 border text-black"
      : variant === "text"
      ? "text-purple-500"
      : "";

  return (
    <button
      className={`w-full rounded items-center px-4 py-3 ${styles} ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;

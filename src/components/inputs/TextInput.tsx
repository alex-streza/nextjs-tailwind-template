import Icon from "@components/icons";
import { forwardRef } from "react";

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  icon?: string;
}

const TextInput = forwardRef((props: TextInputProps, ref: any) => {
  const { label, name, className = "", icon, ...rest } = props;

  const styles = icon ? "pr-12 sm:pr-12" : "";

  return (
    <div className={`flex-none text-base ${props.className ?? ""}`}>
      <label htmlFor={name} className="block font-medium mb-2">
        {label}
      </label>
      <div className={`relative`}>
        <input
          {...rest}
          ref={ref}
          name={name}
          className={`px-3 py-1.5 sm:px-5 sm:py-3 border rounded w-full outline-none appearance-none leading-none focus:border-purple-500 ${styles} ${className}`}
        />
        {icon && (
          <div className="absolute h-full right-0 top-0 border-l flex items-center p-2.5">
            <Icon name={icon} width="24px" />
          </div>
        )}
      </div>
    </div>
  );
});

export default TextInput;

"use client"
import React, { useState, ChangeEvent } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ColorPicker } from "antd";

interface InputTextFieldProps {
  ref?: React.RefObject<HTMLInputElement>;
  type?: "text" | "password" | "textArea" | "colorPicker" | "email";
  icon?: JSX.Element;
  rightIcon?: JSX.Element;
  placeholder?: string;
  className?: string;
  required?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
  ref,
  type,
  icon,
  rightIcon,
  placeholder,
  className,
  required,
  name,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (
    e: any
  ) => {
    setInput(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`w-full rounded-lg ${className}`}>
      <div className="mx-2 flex items-center">
        {icon && <div className="mr-2">{icon}</div>}
        {type === "textArea" ? (
          <textarea
            className="w-full border-none outline-none"
            placeholder={placeholder}
            rows={4}
            cols={50}
            onChange={handleChange}
            required={required}
            name={name}
            value={value}
          />
        ) : (
          <input
            ref={ref as React.RefObject<HTMLInputElement>}
            type={
              type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : type === "email"
                ? "email"
                : "text"
            }
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className="flex-1 border-none text-black outline-none"
            required={required}
            name={name}
          />
        )}

        {rightIcon && <div className="ml-2">{rightIcon}</div>}
        {type === "password" && (
          <div className="ml-2 cursor-pointer">
            {showPassword ? (
              <FiEye
                color="#CCCCCC"
                onClick={handleTogglePasswordVisibility}
                fontSize={20}
              />
            ) : (
              <FiEyeOff
                color="#CCCCCC"
                onClick={handleTogglePasswordVisibility}
                fontSize={20}
              />
            )}
          </div>
        )}
        {type === "colorPicker" && (
          <ColorPicker value={input} onChange={(_, e) => setInput(e)} />
        )}
      </div>
    </div>
  );
};

export default InputTextField;

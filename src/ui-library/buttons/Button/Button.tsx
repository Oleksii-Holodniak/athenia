import { forwardRef } from "react";
import { IButton } from "./interfaces";
import { Component } from "./styles";

const Button = forwardRef<HTMLButtonElement, IButton>((props, ref) => {
  const {
    isRounded = true,
    theme = "default",
    variant = "fill",
    className,
    type = "button",
    children,
    onClick,
  } = props;
  return (
    <Component
      isRounded={isRounded}
      variant={variant}
      type={type}
      theme={theme}
      onClick={onClick}
      ref={ref}
      className={className}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";
export default Button;

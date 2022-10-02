import React, { ReactNode } from "react";
import { ButtonStyled } from "@/components/UI/Button/Button.styled";

interface ButtonProps {
  as?: "a" | "button";
  children: ReactNode | ReactNode[];
  href?: string;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({
  as = "button",
  children,
  href,
  onClick,
}) => {
  return (
    <ButtonStyled
      as={as}
      href={href}
      target={href && "_blank"}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

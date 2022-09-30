import React, { ReactNode } from "react";
import { BadgeStyled } from "@/components/UI/Badge/Badge.styled";

interface BadgeProps {
  children: ReactNode | ReactNode[];
}

const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <BadgeStyled>{children}</BadgeStyled>;
};

export default Badge;

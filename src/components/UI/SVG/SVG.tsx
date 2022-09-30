import React, { ReactNode } from "react";
import { SVGStyled } from "@/components/UI/SVG/SVG.styled";

interface BadgeProps {
  children: ReactNode | ReactNode[];
}

const SVG: React.FC<BadgeProps> = ({ children }) => {
  return (
    <SVGStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Arrow Forward</title>
      {children}
    </SVGStyled>
  );
};

export default SVG;

import React, { ReactNode } from "react";
import { PanelStyled } from "@/components/UI/Panel/Panel.styled";

interface PanelProps {
  children: ReactNode | ReactNode[];
}

const Panel: React.FC<PanelProps> = ({ children }) => {
  return <PanelStyled>{children}</PanelStyled>;
};

export default Panel;

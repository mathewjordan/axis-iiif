import React, { ReactNode } from "react";
import { WorkspaceStyled } from "@/components/UI/Workspace/Workspace.styled";

interface WorkspaceProps {
  children: ReactNode | ReactNode[];
}

const Workspace: React.FC<WorkspaceProps> = ({ children }) => {
  return <WorkspaceStyled>{children}</WorkspaceStyled>;
};

export default Workspace;

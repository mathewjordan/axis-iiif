import React, { ReactNode } from "react";
import { WorkspaceStyled } from "@/components/UI/Workspace/Workspace.styled";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface WorkspaceProps {
  children: ReactNode | ReactNode[];
}

const Workspace: React.FC<WorkspaceProps> = ({ children }) => {
  return (
    <WorkspaceStyled>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </WorkspaceStyled>
  );
};

export default Workspace;

import { styled } from "@/stitches";

const WorkspaceHeader = styled("span", {
  display: "flex",
  margin: "0 0 2rem 0",
  fontSize: "1rem",
  opacity: "0.7",
});

const WorkspaceBody = styled("section", {
  display: "flex",
});

const WorkspaceScroll = styled("div", {
  overflow: "scroll",
  width: "61.8%",
});

const WorkspaceAside = styled("aside", {
  border: "2px dashed #0002",
  flexGrow: "1",
  margin: "0 0 0 2rem",
  padding: "1rem",
  borderRadius: "3px",
});

const WorkspaceStyled = styled("div", {});

export {
  WorkspaceAside,
  WorkspaceBody,
  WorkspaceHeader,
  WorkspaceScroll,
  WorkspaceStyled,
};

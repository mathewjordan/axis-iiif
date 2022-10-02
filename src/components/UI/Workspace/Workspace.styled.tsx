import { styled } from "@/stitches";
import { ButtonStyled } from "@/components/UI/Button/Button.styled";

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
  width: "61.8%",
  flexShrink: "0",
});

const WorkspaceAside = styled("aside", {
  flexGrow: "1",
  margin: "0 0 0 2rem",
});

const WorkspaceActions = styled("div", {
  display: "flex",
  marginBottom: "1rem",

  [`> ${ButtonStyled}`]: {
    margin: "0 1rem 0 0",
    flexGrow: "1",

    "&:last-child": {
      margin: "0",
    },
  },
});

const WorkspaceStyled = styled("div", {});

export {
  WorkspaceActions,
  WorkspaceAside,
  WorkspaceBody,
  WorkspaceHeader,
  WorkspaceScroll,
  WorkspaceStyled,
};

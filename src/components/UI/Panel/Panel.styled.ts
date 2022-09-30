import { styled } from "@/stitches";

const PanelActions = styled("div", {
  display: "flex",
});

const PanelBody = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

const PanelContent = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  fontSize: "1rem",

  "a, a:visited": {
    color: "#000a",
    textDecoration: "none",
    transition: "$all",

    "&:hover, &:active": {
      color: "#5746af",
    },
  },
});

const PanelHeader = styled("header", {
  fontWeight: "700",
  fontSize: "1rem",
  display: "flex",
  alignContent: "center",
});

const PanelStyled = styled("article", {
  backgroundColor: "white",
  margin: "0 0 1rem",
  padding: "1rem",
  borderRadius: "3px",
  boxShadow: "5px 5px 11px #0001",
  transition: "$all",

  "&:hover": {
    boxShadow: "8px 8px 19px #0002",
  },
});

export { PanelStyled, PanelHeader, PanelContent, PanelBody, PanelActions };

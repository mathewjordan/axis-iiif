import { styled } from "@/stitches";

const PanelActions = styled("div", {
  display: "flex",
});

const PanelBody = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
});

const PanelContent = styled("div", {
  display: "flex",
  alignContent: "center",
});

const PanelHeader = styled("header", {
  margin: "0 0 0.618rem",
  fontWeight: "700",
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
    boxShadow: "3px 3px 8px #0002",
  },
});

export { PanelStyled, PanelHeader, PanelContent, PanelBody, PanelActions };

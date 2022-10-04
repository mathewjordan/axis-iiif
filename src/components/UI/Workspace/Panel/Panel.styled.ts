import { styled } from "@/stitches";
import { SVGStyled } from "@/components/UI/SVG/SVG.styled";

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
  minWidth: "0",

  "a, a:visited": {
    width: "100%",
    color: "#000a",
    textDecoration: "none",
    transition: "$all",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

    "&:hover, &:active": {
      color: "#5746af",
    },
  },
});

const PanelHeader = styled("header", {
  fontSize: "1rem",
  display: "flex",
  alignItems: "flex-end",
  alignContent: "flex-end",

  [`> ${SVGStyled}`]: {
    display: "flex",
    position: "relative",
    margin: "0 0.25rem 0 0",
    top: "-0.05rem",
    opacity: "0.5",
  },
});

const PanelHeaderTime = styled("span", {
  display: "flex",
  color: "#000a",
  fontSize: "0.8333rem",
  margin: "0 0 0 0.5rem",
});

const PanelStyled = styled("article", {
  backgroundColor: "white",
  margin: "0 0 1rem",
  padding: "1rem",
  borderRadius: "3px",
  boxShadow: "5px 5px 11px #0001",
  transition: "$all",
  cursor: "move",
  borderLeft: "none",

  "&[data-cart=true]": {
    borderLeft: "1rem solid #5746af",
    cursor: "auto",
  },

  "&:hover": {
    boxShadow: "8px 8px 19px #0002",
  },
});

export {
  PanelStyled,
  PanelHeader,
  PanelHeaderTime,
  PanelContent,
  PanelBody,
  PanelActions,
};

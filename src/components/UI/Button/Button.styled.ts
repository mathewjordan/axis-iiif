import { styled } from "@/stitches";

const ButtonStyled = styled("button", {
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  background: "none",
  backgroundColor: "transparent",
  border: "1px solid #0002",
  fontFamily: "$sans",
  padding: "0.382rem 1rem",
  margin: "0 0 0 1rem",
  fontSize: "1rem",
  textDecoration: "none",
  cursor: "pointer",
  color: "#000a",
  borderRadius: "3px",

  svg: {
    marginLeft: "0.5em",
    opacity: "0.7",
  },
});

export { ButtonStyled };

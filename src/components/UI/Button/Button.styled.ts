import { styled } from "@/stitches";

const ButtonStyled = styled("button", {
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  border: "none",
  background: "linear-gradient(135deg, #5746afdd, #5746af);",
  fontFamily: "$sans",
  padding: "0.5rem 1rem",
  margin: "0 0 0 1rem",
  fontSize: "1rem",
  textDecoration: "none",
  cursor: "pointer",
  color: "#fff",
  borderRadius: "3px",
  textAlign: "center",
  justifyContent: "center",
  transition: "$all",

  "&:hover, &:active": {
    background: "linear-gradient(135deg, #392c72dd, #392c72);",
  },

  svg: {
    marginLeft: "0.5em",
    opacity: "0.7",
  },
});

export { ButtonStyled };

import { styled } from "@/stitches";

const DropzoneStyled = styled("div", {
  height: "100%",
  padding: "1rem",
  border: "2px dashed #0002",
  backgroundColor: "#0001",
  borderRadius: "3px",
  transition: "$all",

  ul: {
    padding: "0",
    margin: "0 1rem",

    li: {
      fontSize: "0.8333rem",
      margin: "0 0 .25rem 0",
    },
  },
});

export { DropzoneStyled };

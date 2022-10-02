import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "@stitches/react";
import { ButtonStyled } from "@/components/UI/Button/Button.styled";

const ModalContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "90vw",
  maxHeight: "90vh",
  backgroundColor: "#1a1d1e",
  overflow: "hidden",
  borderRadius: "3px",
  filter: "drop-shadow(8px 8px 19px #0006)",
});

const ModalContentHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 1rem",
  fontSize: "0.8333rem",
  alignContent: "center",

  h2: {
    fontFamily: "$sans",
    fontWeight: "400",
    fontSize: "inherit",
    color: "#fff",
  },

  [`> ${ButtonStyled}`]: {
    fontSize: "inherit",
    color: "#fff",
    fill: "#fff",
    stroke: "#fff",
    padding: "0",
  },
});

const ModalContentInner = styled("div", {
  backgroundColor: "#fff",
});

const ModalClose = styled(Dialog.Close, {});

const ModalOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  backgroundColor: "#000c",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
});

export {
  ModalContent,
  ModalContentHeader,
  ModalContentInner,
  ModalClose,
  ModalOverlay,
};

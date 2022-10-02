import * as Dialog from "@radix-ui/react-dialog";
import React, { ReactNode } from "react";
import {
  ModalContent,
  ModalContentHeader,
  ModalContentInner,
  ModalClose,
  ModalOverlay,
} from "@/components/UI/Modal/Modal.styled";
import { ButtonStyled } from "@/components/UI/Button/Button.styled";
import { Close } from "@/components/UI/SVG/Paths";
import SVG from "@/components/UI/SVG/SVG";

interface BadgeProps {
  buttonText: string;
  children: ReactNode | ReactNode[];
  title?: string;
}

const Modal: React.FC<BadgeProps> = ({ buttonText, children, title }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonStyled>{buttonText}</ButtonStyled>
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalOverlay />
        <ModalContent>
          <ModalContentHeader>
            {title && <Dialog.Title>{title}</Dialog.Title>}
            <ModalClose asChild>
              <ButtonStyled>
                Close
                <SVG>
                  <Close />
                </SVG>
              </ButtonStyled>
            </ModalClose>
          </ModalContentHeader>
          <ModalContentInner>{children}</ModalContentInner>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;

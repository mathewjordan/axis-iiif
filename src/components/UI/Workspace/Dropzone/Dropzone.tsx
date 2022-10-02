import React from "react";
import { DropzoneStyled } from "@/components/UI/Workspace/Dropzone/Dropzone.styled";
import { useDrop } from "react-dnd";
import { useOrderedCollectionState } from "@/context/ordered-collection-context";
import Button from "../../Button/Button";

interface DropProps {}

const Dropzone: React.FC<DropProps> = () => {
  const { cart } = useOrderedCollectionState();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "resource",
    drop: () => ({ name: "items" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  return (
    <DropzoneStyled ref={drop}>
      {cart && (
        <ul>
          {cart.map((id) => {
            return <li>{id}</li>;
          })}
        </ul>
      )}
    </DropzoneStyled>
  );
};

export default Dropzone;

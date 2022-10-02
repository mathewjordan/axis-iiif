import React from "react";
import { DropzoneStyled } from "@/components/UI/Workspace/Dropzone/Dropzone.styled";
import { useDrop } from "react-dnd";
import { useOrderedCollectionState } from "@/context/ordered-collection-context";

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
  const activeDropStyling = {
    backgroundColor: "#5746af22",
    border: "2px solid #5746afaa",
    boxShadow: " inset 5px 5px 8px #0001",
  };

  return (
    <DropzoneStyled ref={drop} style={isActive ? activeDropStyling : {}}>
      {cart && (
        <ul>
          {cart.map((id) => {
            return <li key={id}>{id}</li>;
          })}
        </ul>
      )}
    </DropzoneStyled>
  );
};

export default Dropzone;

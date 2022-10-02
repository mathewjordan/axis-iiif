import React, { ReactNode } from "react";
import { PanelStyled } from "@/components/UI/Workspace/Panel/Panel.styled";
import { useDrag } from "react-dnd";
import {
  useOrderedCollectionDispatch,
  useOrderedCollectionState,
} from "@/context/ordered-collection-context";

interface PanelProps {
  children: ReactNode | ReactNode[];
  id: string;
}
interface DropResult {
  name: string;
}

const Panel: React.FC<PanelProps> = ({ children, id }) => {
  const { cart } = useOrderedCollectionState();
  const dispatch: any = useOrderedCollectionDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "resource",
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult)
        dispatch({
          type: "updateCart",
          id: item.id,
        });
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.382 : 1;

  return (
    <PanelStyled ref={drag} style={{ opacity }} data-cart={cart.includes(id)}>
      {children}
    </PanelStyled>
  );
};

export default Panel;

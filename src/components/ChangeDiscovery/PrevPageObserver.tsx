import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useOrderedCollectionDispatch } from "@/context/ordered-collection-context";
import { ButtonStyled } from "@/components/UI/Button/Button.styled";

interface PrevPageObserverProps {
  id: string;
}

const PrevPageObserver: React.FC<PrevPageObserverProps> = ({ id }) => {
  const dispatch: any = useOrderedCollectionDispatch();

  const { ref, entry } = useInView({ delay: 100, rootMargin: "800px" });

  useEffect(() => {
    if (entry?.isIntersecting) handlePrev();
  }, [entry]);

  const handlePrev = () =>
    dispatch({
      type: "updatePages",
      id: id,
    });

  return (
    <ButtonStyled
      data-id={id}
      onClick={handlePrev}
      ref={ref}
      css={{ margin: 0 }}
    >
      Load More
    </ButtonStyled>
  );
};

export default PrevPageObserver;

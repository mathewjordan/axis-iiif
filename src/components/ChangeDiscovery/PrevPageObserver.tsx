import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useOrderedCollectionDispatch } from "@/context/ordered-collection-context";

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
    <button data-id={id} onClick={handlePrev} ref={ref}>
      Previous Page
    </button>
  );
};

export default PrevPageObserver;

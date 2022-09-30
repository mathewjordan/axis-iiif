import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useOrderedCollectionDispatch } from "@/context/ordered-collection-context";

interface NextPageObserverProps {
  id: string;
}

const NextPageObserver: React.FC<NextPageObserverProps> = ({ id }) => {
  const dispatch: any = useOrderedCollectionDispatch();

  const { ref, entry } = useInView({ delay: 100, rootMargin: "500px" });

  useEffect(() => {
    if (entry?.isIntersecting) handleNext();
  }, [entry]);

  const handleNext = () =>
    dispatch({
      type: "updatePages",
      id: id,
    });

  return (
    <button data-id={id} onClick={handleNext} ref={ref}>
      Next Page
    </button>
  );
};

export default NextPageObserver;

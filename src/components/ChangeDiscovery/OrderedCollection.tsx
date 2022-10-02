import React, { useEffect, useState } from "react";
import {
  useOrderedCollectionDispatch,
  useOrderedCollectionState,
} from "@/context/ordered-collection-context";
import NextPageObserver from "@/components/ChangeDiscovery/NextPageObserver";
import OrderedCollectionPage from "@/components/ChangeDiscovery/OrderedCollectionPage";
import { OrderedCollectionShape } from "@/types/change-discovery";
import { getOrderedCollection } from "@/services/request";

interface OrderedCollectionProps {
  id: string;
}

const OrderedCollection: React.FC<OrderedCollectionProps> = ({ id }) => {
  const [data, setData] = useState<OrderedCollectionShape>();
  const { next, pages } = useOrderedCollectionState();

  const dispatch: any = useOrderedCollectionDispatch();

  useEffect(() => {
    if (id)
      getOrderedCollection(id).then((data) => {
        setData(data);
        dispatch({
          type: "updatePages",
          id: data?.first?.id,
        });
      });
  }, [id]);

  if (!data) return <></>;

  return (
    <>
      <span>{data?.id}</span>
      <section>
        {pages.map((id, index) => (
          <OrderedCollectionPage id={id} index={index} key={index} />
        ))}
      </section>
      {next && <NextPageObserver id={next} />}
    </>
  );
};

export default OrderedCollection;

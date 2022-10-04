import React, { useEffect, useState } from "react";
import { OrderedCollectionPageShape } from "@/types/change-discovery";
import OrderedItem from "@/components/ChangeDiscovery/OrderedItem";
import { getOrderedCollectionPage } from "@/services/request";
import { useOrderedCollectionDispatch } from "@/context/ordered-collection-context";

interface OrderedCollectionPageProps {
  id: string;
  index: number;
}

const OrderedCollectionPage: React.FC<OrderedCollectionPageProps> = ({
  id,
}) => {
  const [data, setData] = useState<OrderedCollectionPageShape>();

  const dispatch: any = useOrderedCollectionDispatch();

  useEffect(() => {
    if (id && !data)
      getOrderedCollectionPage(id).then((data) => {
        data.orderedItems.reverse();
        setData(data);
        dispatch({
          type: "updatePrev",
          id: data?.prev?.id,
        });
      });
  }, [id]);

  if (!data) return <></>;

  return (
    <div>
      {data.orderedItems.map((item) => (
        <OrderedItem
          activity={item.type}
          endTime={item.endTime}
          object={item.object}
          key={item.object.id}
        />
      ))}
    </div>
  );
};

export default OrderedCollectionPage;

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
    if (id)
      getOrderedCollectionPage(id).then((data) => {
        setData(data);
        dispatch({
          type: "updateNext",
          id: data?.next?.id,
        });
      });
  }, [id]);

  if (!data) return <></>;

  return (
    <div>
      {data?.orderedItems?.map((item) => (
        <OrderedItem
          activity={item.type}
          object={item.object}
          key={item.object.id}
        />
      ))}
    </div>
  );
};

export default OrderedCollectionPage;

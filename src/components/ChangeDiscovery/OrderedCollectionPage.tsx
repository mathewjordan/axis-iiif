import React, { useEffect, useState } from "react";
import { OrderedCollectionPageShape } from "@/types/change-discovery";
import OrderedItem from "@/components/ChangeDiscovery/OrderedItem";
import { getOrderedCollectionPage } from "@/services/request";

interface OrderedCollectionPageProps {
  id: string;
  index: number;
}

const OrderedCollectionPage: React.FC<OrderedCollectionPageProps> = ({
  id,
}) => {
  const [data, setData] = useState<OrderedCollectionPageShape>();

  useEffect(() => {
    if (id) getOrderedCollectionPage(id).then((data) => setData(data));
  }, [id]);

  if (!data) return <></>;

  return (
    <div>
      <h3>{data?.id}</h3>
      <ul>
        {data?.orderedItems?.map((item) => (
          <OrderedItem activity={item.type} object={item.object} />
        ))}
      </ul>
      <button>{data?.next.id}</button>
    </div>
  );
};

export default OrderedCollectionPage;

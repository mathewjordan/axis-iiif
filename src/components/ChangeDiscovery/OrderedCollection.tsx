import React, { useEffect, useState } from "react";
import OrderedCollectionPage from "@/components/ChangeDiscovery/OrderedCollectionPage";
import { OrderedCollectionShape } from "@/types/change-discovery";
import { getOrderedCollection } from "@/services/request";

interface OrderedCollectionProps {
  id: string;
}

const OrderedCollection: React.FC<OrderedCollectionProps> = ({ id }) => {
  const [data, setData] = useState<OrderedCollectionShape>();

  useEffect(() => {
    if (id)
      getOrderedCollection(id).then((data) => {
        setData(data);
      });
  }, [id]);

  if (!data) return <></>;

  return (
    <>
      {data?.id}
      <OrderedCollectionPage id={data?.first?.id} index={0} />
    </>
  );
};

export default OrderedCollection;

import React, { useEffect, useState } from "react";
import { OrderedCollectionShape } from "@/types/change-discovery";
import { getOrderedCollection } from "@/services/request";
import OrderedCollectionPage from "./OrderedCollectionPage";

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

import React, { useEffect, useState } from "react";
import { OrderedCollectionShape } from "@/types/change-discovery";
import {
  getOrderedCollection,
  getOrderedCollectionPage,
} from "@/services/request";

interface OrderedCollectionPageProps {
  id: string;
  index: number;
}

const OrderedCollectionPage: React.FC<OrderedCollectionPageProps> = ({
  id,
}) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (id)
      getOrderedCollectionPage(id).then((data) => {
        console.log(data);
        setData(data);
      });
  }, [id]);

  if (!data) return <></>;

  return (
    <div>
      <h3>{data?.id}</h3>
      <ul>
        {data?.orderedItems?.map((item) => (
          <li>
            <span>{item.type}</span>
            <div>
              {item.object.type}
              {item.object.id}
              {item.object.canonical && (
                <a href={item.object.canonical} target="_blank">
                  Visit
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button>{data?.next.id}</button>
    </div>
  );
};

export default OrderedCollectionPage;

import { ActivityType, OrderedItemObjectShape } from "@/types/change-discovery";
import React from "react";

interface OrderedItemProps {
  activity: ActivityType;
  object: OrderedItemObjectShape;
}

const OrderedItem: React.FC<OrderedItemProps> = ({ activity, object }) => {
  const { canonical, id, type } = object;

  return (
    <li>
      <strong>{activity}</strong>
      <div>
        {type}
        {id}
        {canonical && (
          <a href={canonical} target="_blank">
            Visit
          </a>
        )}
      </div>
    </li>
  );
};

export default OrderedItem;

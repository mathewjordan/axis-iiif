import { ActivityType, OrderedItemObjectShape } from "@/types/change-discovery";
import React from "react";

interface OrderedItemProps {
  activity: ActivityType;
  object: OrderedItemObjectShape;
}

const OrderedItem: React.FC<OrderedItemProps> = ({ activity, object }) => {
  const { canonical, id, type } = object;

  return (
    <div>
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
    </div>
  );
};

export default OrderedItem;

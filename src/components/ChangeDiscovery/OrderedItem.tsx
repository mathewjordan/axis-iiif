import { ActivityType, OrderedItemObjectShape } from "@/types/change-discovery";
import React from "react";
import Badge from "@/components/UI/Badge/Badge";
import Panel from "@/components/UI/Panel/Panel";
import SVG from "@/components//UI/SVG/SVG";
import { ArrowForward } from "@/components/UI/SVG/Paths";
import {
  PanelActions,
  PanelBody,
  PanelContent,
  PanelHeader,
} from "@/components/UI/Panel/Panel.styled";
import Button from "../UI/Button/Button";

interface OrderedItemProps {
  activity: ActivityType;
  object: OrderedItemObjectShape;
}

const OrderedItem: React.FC<OrderedItemProps> = ({ activity, object }) => {
  const { canonical, id, type } = object;

  return (
    <Panel>
      <PanelHeader>
        <Badge>{activity}</Badge>
        <SVG>
          <ArrowForward />
        </SVG>
        <Badge>{type}</Badge>
      </PanelHeader>
      <PanelBody>
        <PanelContent>
          <a href={id}>{id}</a>
        </PanelContent>
        <PanelActions>
          {canonical && (
            <Button as="a" href={canonical}>
              Visit
            </Button>
          )}
          <Button>Preview</Button>
          <Button>Actions</Button>
        </PanelActions>
      </PanelBody>
    </Panel>
  );
};

export default OrderedItem;

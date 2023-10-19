import { ActivityType, OrderedItemObjectShape } from "@/types/change-discovery";
import {
  PanelActions,
  PanelBody,
  PanelContent,
  PanelHeader,
  PanelHeaderTime,
} from "@/components/UI/Workspace/Panel/Panel.styled";

import { ArrowForward } from "@/components/UI/SVG/Paths";
import Badge from "@/components/UI/Badge/Badge";
import Button from "@/components/UI/Button/Button";
import Modal from "@/components/UI/Modal/Modal";
import Panel from "@/components/UI/Workspace/Panel/Panel";
import React from "react";
import SVG from "@/components//UI/SVG/SVG";
import { Viewer } from "@samvera/clover-iiif";

interface OrderedItemProps {
  activity: ActivityType;
  endTime?: string;
  object: OrderedItemObjectShape;
}

const OrderedItem: React.FC<OrderedItemProps> = ({
  activity,
  endTime,
  object,
}) => {
  const { canonical, id, type } = object;

  return (
    <Panel id={id}>
      <PanelHeader>
        <Badge>{activity}</Badge>
        <SVG>
          <ArrowForward />
        </SVG>
        <Badge>{type}</Badge>
        {endTime && <PanelHeaderTime>{endTime}</PanelHeaderTime>}
      </PanelHeader>
      <PanelBody>
        <PanelContent>
          <a href={id} target="_blank">
            {id}
          </a>
        </PanelContent>
        <PanelActions>
          {canonical && (
            <Button as="a" href={canonical}>
              Visit
            </Button>
          )}
          <Modal buttonText="Preview" title={id}>
            <Viewer
              iiifContent={id}
              options={{
                canvasHeight: "500px",
              }}
            />
          </Modal>
        </PanelActions>
      </PanelBody>
    </Panel>
  );
};

export default OrderedItem;

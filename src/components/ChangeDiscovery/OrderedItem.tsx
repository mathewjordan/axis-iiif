import { ActivityType, OrderedItemObjectShape } from "@/types/change-discovery";
import React from "react";
import Clover from "@samvera/clover-iiif";
import Badge from "@/components/UI/Badge/Badge";
import Panel from "@/components/UI/Workspace/Panel/Panel";
import SVG from "@/components//UI/SVG/SVG";
import { ArrowForward } from "@/components/UI/SVG/Paths";
import {
  PanelActions,
  PanelBody,
  PanelContent,
  PanelHeader,
} from "@/components/UI/Workspace/Panel/Panel.styled";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import { useOrderedCollectionState } from "@/context/ordered-collection-context";

interface OrderedItemProps {
  activity: ActivityType;
  object: OrderedItemObjectShape;
}

const OrderedItem: React.FC<OrderedItemProps> = ({ activity, object }) => {
  const { canonical, id, type } = object;

  return (
    <Panel id={id}>
      <PanelHeader>
        <Badge>{activity}</Badge>
        <SVG>
          <ArrowForward />
        </SVG>
        <Badge>{type}</Badge>
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
            <Clover
              id={id}
              options={{
                canvasHeight: "500px",
                showIIIFBadge: false,
                showInformationToggle: false,
              }}
            />
          </Modal>
        </PanelActions>
      </PanelBody>
    </Panel>
  );
};

export default OrderedItem;

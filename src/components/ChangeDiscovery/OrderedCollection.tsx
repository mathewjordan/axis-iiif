import React, { useEffect, useState } from "react";
import {
  useOrderedCollectionDispatch,
  useOrderedCollectionState,
} from "@/context/ordered-collection-context";
import NextPageObserver from "@/components/ChangeDiscovery/NextPageObserver";
import OrderedCollectionPage from "@/components/ChangeDiscovery/OrderedCollectionPage";
import { OrderedCollectionShape } from "@/types/change-discovery";
import { getOrderedCollection } from "@/services/request";
import Workspace from "@/components/UI/Workspace/Workspace";
import {
  WorkspaceAside,
  WorkspaceBody,
  WorkspaceHeader,
  WorkspaceScroll,
} from "@/components/UI/Workspace/Workspace.styled";

interface OrderedCollectionProps {
  id: string;
}

const OrderedCollection: React.FC<OrderedCollectionProps> = ({ id }) => {
  const [data, setData] = useState<OrderedCollectionShape>();
  const { next, pages } = useOrderedCollectionState();

  const dispatch: any = useOrderedCollectionDispatch();

  useEffect(() => {
    if (id)
      getOrderedCollection(id).then((data) => {
        setData(data);
        dispatch({
          type: "updatePages",
          id: data?.first?.id,
        });
      });
  }, [id]);

  if (!data) return <></>;

  return (
    <Workspace>
      <WorkspaceHeader>{data?.id}</WorkspaceHeader>
      <WorkspaceBody>
        <WorkspaceScroll>
          {pages.map((id, index) => (
            <OrderedCollectionPage id={id} index={index} key={index} />
          ))}
          {next && <NextPageObserver id={next} />}
        </WorkspaceScroll>
        <WorkspaceAside></WorkspaceAside>
      </WorkspaceBody>
    </Workspace>
  );
};

export default OrderedCollection;

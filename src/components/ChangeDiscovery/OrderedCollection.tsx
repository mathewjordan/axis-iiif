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
  WorkspaceActions,
  WorkspaceAside,
  WorkspaceBody,
  WorkspaceHeader,
  WorkspaceScroll,
} from "@/components/UI/Workspace/Workspace.styled";
import Dropzone from "@/components/UI/Workspace/Dropzone/Dropzone";
import Button from "@/components/UI/Button/Button";

interface OrderedCollectionProps {
  handleCart?: (arg0: string[]) => void;
  id: string;
}

const OrderedCollection: React.FC<OrderedCollectionProps> = ({
  handleCart = () => {},
  id,
}) => {
  const [data, setData] = useState<OrderedCollectionShape>();
  const { cart, next, pages } = useOrderedCollectionState();

  const dispatch: any = useOrderedCollectionDispatch();

  const handleReset = () =>
    dispatch({
      type: "resetCart",
    });

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
        <WorkspaceAside>
          {cart.length > 0 && (
            <WorkspaceActions>
              <Button onClick={() => handleCart(cart)}>
                Harvest {cart.length} Resource(s)
              </Button>
              <Button onClick={handleReset}>Reset All</Button>
            </WorkspaceActions>
          )}
          <Dropzone />
        </WorkspaceAside>
      </WorkspaceBody>
    </Workspace>
  );
};

export default OrderedCollection;

import React from "react";
import OrderedCollection from "@/components/ChangeDiscovery/OrderedCollection";
import { OrderedCollectionProvider } from "@/context/ordered-collection-context";
interface Props {
  id: string;
}

const App: React.FC<Props> = ({ id }) => {
  return (
    <>
      <OrderedCollectionProvider>
        <OrderedCollection id={id} />
      </OrderedCollectionProvider>
    </>
  );
};

export default App;

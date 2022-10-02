import React, { useEffect } from "react";
import OrderedCollection from "@/components/ChangeDiscovery/OrderedCollection";
import { OrderedCollectionProvider } from "@/context/ordered-collection-context";

interface Props {
  cartCallback?: (arg0: string[]) => void;
  id: string;
}

const App: React.FC<Props> = ({ cartCallback = () => {}, id }) => {
  return (
    <OrderedCollectionProvider>
      <OrderedCollection id={id} handleCart={cartCallback} />
    </OrderedCollectionProvider>
  );
};

export default App;

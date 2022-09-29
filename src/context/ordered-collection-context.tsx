import React from "react";

interface OrderedCollectionContextStore {
  next: string;
  pages: string[];
}

interface OrderedCollectionAction {
  id: string;
  type: string;
}

const defaultState: OrderedCollectionContextStore = {
  next: "",
  pages: [],
};

const OrderedCollectionStateContext =
  React.createContext<OrderedCollectionContextStore>(defaultState);

const OrderedCollectionDispatchContext =
  React.createContext<OrderedCollectionContextStore>(defaultState);

function orderedCollectionReducer(
  state: OrderedCollectionContextStore,
  action: OrderedCollectionAction,
) {
  switch (action.type) {
    case "updateNext": {
      return {
        ...state,
        next: action.id,
      };
    }
    case "updatePages": {
      return {
        ...state,
        pages: !state.pages.includes(action.id)
          ? [...state.pages, action.id]
          : state.pages,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

interface OrderedCollectionProviderProps {
  initialState?: OrderedCollectionContextStore;
  children: React.ReactNode;
}

const OrderedCollectionProvider: React.FC<OrderedCollectionProviderProps> = ({
  initialState = defaultState,
  children,
}) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<OrderedCollectionContextStore, OrderedCollectionAction>
  >(orderedCollectionReducer, initialState);

  return (
    <OrderedCollectionStateContext.Provider value={state}>
      <OrderedCollectionDispatchContext.Provider
        value={dispatch as unknown as OrderedCollectionContextStore}
      >
        {children}
      </OrderedCollectionDispatchContext.Provider>
    </OrderedCollectionStateContext.Provider>
  );
};

function useOrderedCollectionState() {
  const context = React.useContext(OrderedCollectionStateContext);
  if (context === undefined) {
    throw new Error(
      "useOrderedCollectionState must be used within OrderedCollectionProvider",
    );
  }
  return context;
}

function useOrderedCollectionDispatch() {
  const context = React.useContext(OrderedCollectionDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useOrderedCollectionDispatch must be used within OrderedCollectionProvider",
    );
  }
  return context;
}

export {
  OrderedCollectionProvider,
  useOrderedCollectionState,
  useOrderedCollectionDispatch,
};

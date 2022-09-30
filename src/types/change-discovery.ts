export interface OrderedCollectionShape {
  "@context": Context;
  id: string;
  type: "OrderedCollection";
  first: OrderedCollectionLink;
  last: OrderedCollectionLink;
  totalItems?: number;
  seeAlso?: unknown;
  partOf?: unknown;
  rights: string;
}

export interface OrderedCollectionLink {
  id: string;
  type: "OrderedCollectionPage";
}

export interface OrderedCollectionPageShape {
  "@context": Context;
  id: string;
  type: "OrderedCollectionPage";
  partOf?: unknown;
  startIndex?: string;
  next: OrderedCollectionLink;
  prev: OrderedCollectionLink;
  orderedItems: OrderedItemShape[];
}

export interface OrderedItemShape {
  type: ActivityType;
  object: OrderedItemObjectShape;
  endTime?: string;
  startTime?: string;
  summary?: string;
  actor?: OrderedItemActorShape;
}

export interface OrderedItemObjectShape {
  id: string;
  type: PresentationType;
  canonical?: string;
  seeAlso?: unknown;
  provider?: unknown;
  target?: OrderedItemTargetShape;
}

export interface OrderedItemTargetShape {
  id: string;
  type: PresentationType;
  seeAlso?: unknown;
}

export interface OrderedItemActorShape {
  id: string;
  type: ActorType;
}

type Context = "http://iiif.io/api/discovery/1/context.json";

export type ActivityType =
  | "Create"
  | "Update"
  | "Delete"
  | "Move"
  | "Add"
  | "Remove"
  | "Refresh";
export type PresentationType = "Collection" | "Manifest";
export type ActorType = "Application" | "Organization" | "Person";

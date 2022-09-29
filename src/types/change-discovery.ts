export interface OrderedCollectionShape {
  "@context": "http://iiif.io/api/discovery/1/context.json";
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

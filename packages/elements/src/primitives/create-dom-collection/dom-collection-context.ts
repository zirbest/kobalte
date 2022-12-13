import { createContext, useContext } from "solid-js";

import { DomCollectionItem } from "./types";

export interface DomCollectionContextValue<T extends DomCollectionItem = DomCollectionItem> {
  registerItem: (item: T) => () => void;
}

export const DomCollectionContext = createContext<DomCollectionContextValue>();

export function useDomCollectionContext<T extends DomCollectionItem = DomCollectionItem>() {
  const context = useContext(DomCollectionContext);

  if (context === undefined) {
    throw new Error(
      "[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component"
    );
  }

  return context as DomCollectionContextValue<T>;
}

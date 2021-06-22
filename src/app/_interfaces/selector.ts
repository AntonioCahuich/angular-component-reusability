import {Item} from "../item";

export interface Selector {
  select(item: Item): void;
  unselect(item: Item): void;
}

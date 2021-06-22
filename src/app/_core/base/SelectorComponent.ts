import {EventEmitter, Input} from "@angular/core";
import {Item} from "../../item";

export abstract class SelectorComponent {
  item!: Item;
  isSelected!: boolean;
  selected = new EventEmitter<Item>();
  unselected = new EventEmitter<Item>();

  select(item: Item) {
    this.selected.emit(item);
  }

  unselect(item: Item) {
    this.unselected.emit(item);
  }
}

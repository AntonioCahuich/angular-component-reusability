import {Component, Input} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent {
  @Input() items: Item[] = [];

  currentPage = 0;
  selectedItems: Item[] = [];

  selected(item: Item) {
    this.selectedItems = [...this.selectedItems, item];
  }

  unselected(item: Item) {
    this.selectedItems = this.selectedItems.filter(({value}) => value !== item.value);
  }

  isItemSelected(item: Item) {
    return this.selectedItems.some(({value}) => item.value === value);
  }
}

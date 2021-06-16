import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  @Input() item!: Item;
  @Input() isSelected!: boolean;
  @Output() selected = new EventEmitter<Item>();
  @Output() unselected = new EventEmitter<Item>();

  onChange($event: any) {
    $event.target.checked ? this.selected.emit(this.item) : this.unselected.emit(this.item)
  }
}

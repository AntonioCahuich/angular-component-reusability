import {Component} from '@angular/core';
import {SelectorComponent} from "../_core/base/SelectorComponent";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  inputs: ["item", "isSelected"],
  outputs: ["selected", "unselected"]
})
export class CustomerComponent extends SelectorComponent {
  onChange($event: any) {
    $event.target.checked ? this.select(this.item) : this.unselect(this.item)
  }
}

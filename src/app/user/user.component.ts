import {Component} from '@angular/core';
import {SelectorComponent} from "../_core/base/SelectorComponent";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  inputs: ["item", "isSelected"],
  outputs: ["selected", "unselected"]
})
export class UserComponent extends SelectorComponent {
  onChange($event: any) {
    $event.target.value == 1 ? this.select(this.item) : this.unselect(this.item)
  }
}

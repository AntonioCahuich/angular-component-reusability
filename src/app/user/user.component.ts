import {Component} from '@angular/core';
import {CustomerComponent} from "../customer/customer.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends CustomerComponent {
  onChange($event: any) {
    $event.target.value == 1 ? this.selected.emit(this.item) : this.unselected.emit(this.item);
  }
}

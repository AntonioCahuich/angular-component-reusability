import {Component} from '@angular/core';
import {Item} from "./item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-component-reusability';
  customers: Item[] = [
    {id: 0, display: "Big Bank", value: 1},
    {id: 1, display: "Small Startup", value: 2},
    {id: 2, display: "Medium Great Shop", value: 3},
    {id: 3, display: "Big Bank 2", value: 4},
    {id: 4, display: "Small Startup 2", value: 5},
    {id: 5, display: "Medium Great Shop 2", value: 6}
  ];

  onSelected(item: Item) {
    console.log('selected', item)
  }

  onUnselected(item: Item) {
    console.log('unselected', item)
  }

}

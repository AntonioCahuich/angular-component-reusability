import {AfterViewInit, Component, ContentChild, Input, OnInit, TemplateRef} from '@angular/core';
import {Item} from "../item";
import {Selector as ISelector} from "../_interfaces/selector";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {
  @Input() items: Item[] = [];
  @Input() itemsPerPage = 2;
  @Input() currentPage!: number;

  @ContentChild('item', {static: false}) template!: TemplateRef<ISelector>;

  get start() {
    return this.currentPage * this.itemsPerPage;
  }

  get end() {
    return this.currentPage * this.itemsPerPage + this.itemsPerPage;
  }

  ngAfterViewInit() {
  }
}

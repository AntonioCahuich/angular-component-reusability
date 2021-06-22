import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() itemsPerPage = 2;
  @Input() itemsLength!: number;

  @Output() pageChanged = new EventEmitter<number>();

  get pages() {
    return new Array(this.itemsLength / this.itemsPerPage);
  }
}

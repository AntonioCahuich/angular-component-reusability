import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ["elevation"],
})
export class SheetComponent implements OnInit {
  rounded!: boolean | string;
  elevation!: number | string;

  constructor() {
  }

  @HostBinding('class') get classes(): object {
    return {
      'app-sheet': true,
      [`elevation-${this.elevation}`]: this.elevation,
      [`rounded-${this.rounded}`]: this.rounded,
    }
  }

  ngOnInit(): void {
  }
}

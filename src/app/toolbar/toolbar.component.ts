import {Component, ElementRef, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {SheetComponent} from "../sheet/sheet.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ["elevation"]
})
export class ToolbarComponent extends SheetComponent {
  // static ngAcceptInputType_fixed: boolean | "";

  @Input() fixed!: boolean;

  @HostBinding('class') get classes(): object {
    return {
      "app-toolbar": true,
      "app-toolbar--fixed": this.fixed,

      ...super.classes,
    };
  }

  ngOnInit(): void {
  }
}

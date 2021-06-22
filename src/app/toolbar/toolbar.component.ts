import {Component, ElementRef, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {SheetComponent} from "../sheet/sheet.component";
import themeMixin from "../_core/behaviors/themeMixin";

const _ToolbarBase = themeMixin(
  class extends SheetComponent {

  }
)

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ["elevation"]
})
export class ToolbarComponent extends _ToolbarBase {
  // static ngAcceptInputType_fixed: boolean | "";

  constructor(_elementRef: ElementRef) {
    super(_elementRef);
  }

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

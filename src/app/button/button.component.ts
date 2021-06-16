import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import themeMixin from "../_core/behaviors/themeMixin";

class BaseButton {
  label!: string;
  disabled!: boolean;
}

@Component({
  selector: 'button[app-button-primary]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonPrimaryComponent extends themeMixin(BaseButton) {
  constructor(public _elementRef: ElementRef) {
    super(_elementRef);

    console.log(this.theme);
  }
}

@Component({
  selector: 'button[app-button-secondary]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonSecondaryComponent extends themeMixin(BaseButton, "secondary") {
  constructor(public _elementRef: ElementRef) {
    super(_elementRef);

    console.log(this.theme);
  }
}

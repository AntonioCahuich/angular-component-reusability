import {Component, ElementRef, ViewEncapsulation} from '@angular/core';
import themeMixin from "../_core/behaviors/themeMixin";
import sizableMixin from "../_core/behaviors/sizableMixin";

const _BaseButton = sizableMixin(themeMixin(
  class {
    label!: string;
    disabled!: boolean;

    constructor(_elementRef: ElementRef) {
    }
  },
  "secondary"
), "large")

@Component({
  selector: 'button[app-button-primary]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  inputs: ['size'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonPrimaryComponent extends _BaseButton {
  constructor(public _elementRef: ElementRef) {
    super(_elementRef);
  }
}

@Component({
  selector: 'button[app-button-secondary]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonSecondaryComponent extends _BaseButton {
  constructor(public _elementRef: ElementRef) {
    super(_elementRef);
  }
}

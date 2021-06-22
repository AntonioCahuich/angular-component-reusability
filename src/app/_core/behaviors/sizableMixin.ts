import {ElementRef} from "@angular/core";

export default function sizableMixin(BaseClass: any, size: string = "medium") {
  return class extends BaseClass {
    size: string = size;

    constructor(public _elementRef: ElementRef) {
      super(_elementRef);
      this._elementRef.nativeElement.classList.add(`size--${this.size}`);
    }
  }
}

import {ElementRef} from "@angular/core";

export default function themeMixin(BaseClass: any, theme: string = "primary") {
  return class extends BaseClass {
    theme: string = theme;

    constructor(public _elementRef: ElementRef) {
      super();
      this._elementRef.nativeElement.classList.add(this.theme);
    }
  }
}

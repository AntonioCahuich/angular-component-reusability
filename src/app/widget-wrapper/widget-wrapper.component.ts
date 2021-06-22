import {Component, ContentChild, OnInit} from '@angular/core';
import {WIDGET} from "../widgets/widgte.token";
import {Widget} from "../widgets/widget.interface";

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET) widget!: Widget;

  ngOnInit(): void {
  }

  onRefresh() {
    this.widget.refresh();
  }
}

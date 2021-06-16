import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonPrimaryComponent, ButtonSecondaryComponent} from './button/button.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {SheetComponent} from './sheet/sheet.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { PaginationComponent } from './list/pagination/pagination.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    SheetComponent,
    ToolbarComponent,
    ListComponent,
    PaginationComponent,
    CustomerComponent,
    CustomerListComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

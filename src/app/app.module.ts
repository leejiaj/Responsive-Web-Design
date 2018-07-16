import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResponsivePageComponent } from './responsive-page/responsive-page.component';
import { ResponsivePageFlexboxComponent } from './responsive-page-flexbox/responsive-page-flexbox.component';
import { DemoFlexbox1Component } from './demo-flexbox1/demo-flexbox1.component';
import { DemoFlexbox2Component } from './demo-flexbox2/demo-flexbox2.component';
import { DemoFlexbox3Component } from './demo-flexbox3/demo-flexbox3.component';
import { ResponsivePageTableComponent } from './responsive-page-table/responsive-page-table.component';
import { ResponsivePageTable1Component } from './responsive-page-table1/responsive-page-table1.component';
import { ResponsivePageTableBootstrapComponent } from './responsive-page-table-bootstrap/responsive-page-table-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ResponsivePageComponent,
    ResponsivePageFlexboxComponent,
    DemoFlexbox1Component,
    DemoFlexbox2Component,
    DemoFlexbox3Component,
    ResponsivePageTableComponent,
    ResponsivePageTable1Component,
    ResponsivePageTableBootstrapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

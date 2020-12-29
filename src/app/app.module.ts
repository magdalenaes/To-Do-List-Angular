import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import localePL from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';

registerLocaleData(localePL);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

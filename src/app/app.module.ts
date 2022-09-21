import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // declares the app component so that angular can locate its selector
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  // allow  APM app runs correctly
  imports: [
    BrowserModule,
    FormsModule
  ],
  // starting component of the app
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

// custom pipe
import { KeysPipe } from './pipes/keys';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    GroceryComponent,
    ItemFormComponent,
    ItemCardComponent,
    KeysPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MarvelHomeComponent } from './shared/components/marvel-home/marvel-home.component';
import { CardComponent } from './shared/components/card/card.component';
import { CardComicsComponent } from './shared/components/card-comics/card-comics.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelHomeComponent,
    CardComponent,
    CardComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

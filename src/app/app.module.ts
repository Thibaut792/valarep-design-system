import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

import { AppComponent } from './app.component';
import { CardComponent } from './components/cards/card/card.component';
import { LoginPageCardComponent } from './login-page-card/login-page-card.component';
import { NewLettersCardComponent } from './new-letters-card/new-letters-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginPageCardComponent,
    NewLettersCardComponent
  ],
  imports: [
    BrowserModule,
    NgHeroiconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

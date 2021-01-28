import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ErrorComponent } from './error/error.component';
import { TipsComponent } from './tips/tips.component';
import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { CookComponent } from './cook/cook.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ErrorComponent,
    TipsComponent,
    NewsComponent,
    ForumComponent,
    CookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

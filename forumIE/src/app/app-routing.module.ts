import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ErrorComponent } from './error/error.component';
import { TipsComponent } from './tips/tips.component';
import { NewsComponent } from './news/news.component';
import { ForumComponent } from './forum/forum.component';
import { CookComponent } from './cook/cook.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path : 'news', component: NewsComponent},
  {path : 'forum',  component : ForumComponent},
  {path : 'accueil',  component: AccueilComponent},
  {path : 'tips',  component: TipsComponent},
  {path : 'cook',  component: CookComponent},
  {path : '', component: AccueilComponent },
  {path: 'not-found', component: ErrorComponent },
  {path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

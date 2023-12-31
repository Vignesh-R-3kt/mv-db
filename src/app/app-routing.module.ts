import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "movie/:id", component: MovieDetailsComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

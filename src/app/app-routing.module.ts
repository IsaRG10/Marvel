import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelHomeComponent } from './shared/components/marvel-home/marvel-home.component';

const routes: Routes = [
  {path: '', redirectTo:'marvel-home' , pathMatch:'full'},
  {path: 'marvel-home', component:MarvelHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

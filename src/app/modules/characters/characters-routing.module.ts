import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './views/components/character-details/character-details.component';
import { PrincipalCharactersComponent } from './views/components/principal-characters/principal-characters.component';

const routes: Routes = [
  {path: '', component: PrincipalCharactersComponent},
  {path: 'character-details/:id', component: CharacterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }

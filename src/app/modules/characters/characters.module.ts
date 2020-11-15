import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterDetailsComponent } from './views/components/character-details/character-details.component';
import { PrincipalCharactersComponent } from './views/components/principal-characters/principal-characters.component';


@NgModule({
  declarations: [
    CharacterDetailsComponent,
    PrincipalCharactersComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }

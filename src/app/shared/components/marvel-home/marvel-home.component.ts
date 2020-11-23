import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.css']
})
export class MarvelHomeComponent implements OnInit {
  characters:any =  [];
  comics:any = [];

  constructor(private marvel: MarvelService) { }

  ngOnInit(): void {
    this.getCharacters();
    this.getComics();
  }

  getCharacters(){
    this.marvel.getAllCharacters().subscribe(res => {
      this.characters = res.data.results;
    });
  }

  getComics(){
    this.marvel.getAllComics().subscribe(res => {
      this.comics = res.data.results;
    })
  }
}

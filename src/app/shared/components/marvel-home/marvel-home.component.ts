import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-marvel-home',
  templateUrl: './marvel-home.component.html',
  styleUrls: ['./marvel-home.component.css']
})
export class MarvelHomeComponent implements OnInit {
  characters:any =  [];

  constructor(private marvel: MarvelService) { }

  ngOnInit(): void {
    this.getCharacters();
    
  }

  getCharacters(){
    this.marvel.getAllCharacters().subscribe(res => {
      this.characters = res.data.results;
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-comics',
  templateUrl: './card-comics.component.html',
  styleUrls: ['./card-comics.component.css']
})
export class CardComicsComponent implements OnInit {
  @Input() items = []; 
  constructor() { }

  ngOnInit(): void {
  }

}

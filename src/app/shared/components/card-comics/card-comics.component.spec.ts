import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComicsComponent } from './card-comics.component';

describe('CardComicsComponent', () => {
  let component: CardComicsComponent;
  let fixture: ComponentFixture<CardComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

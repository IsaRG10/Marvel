import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalCharactersComponent } from './principal-characters.component';

describe('PrincipalCharactersComponent', () => {
  let component: PrincipalCharactersComponent;
  let fixture: ComponentFixture<PrincipalCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypePageComponent } from './pokemon-type-page.component';

describe('PokemonTypePageComponent', () => {
  let component: PokemonTypePageComponent;
  let fixture: ComponentFixture<PokemonTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

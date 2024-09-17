import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombattimentoRavvicinatoComponent } from './combattimento-ravvicinato.component';

describe('CombattimentoRavvicinatoComponent', () => {
  let component: CombattimentoRavvicinatoComponent;
  let fixture: ComponentFixture<CombattimentoRavvicinatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombattimentoRavvicinatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombattimentoRavvicinatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

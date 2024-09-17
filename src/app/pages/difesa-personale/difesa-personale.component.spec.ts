import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifesaPersonaleComponent } from './difesa-personale.component';

describe('DifesaPersonaleComponent', () => {
  let component: DifesaPersonaleComponent;
  let fixture: ComponentFixture<DifesaPersonaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifesaPersonaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DifesaPersonaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

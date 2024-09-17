import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitBoxeComponent } from './fit-boxe.component';

describe('FitBoxeComponent', () => {
  let component: FitBoxeComponent;
  let fixture: ComponentFixture<FitBoxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitBoxeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitBoxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

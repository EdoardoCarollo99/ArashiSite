import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprayPeperoncinoComponent } from './spray-peperoncino.component';

describe('SprayPeperoncinoComponent', () => {
  let component: SprayPeperoncinoComponent;
  let fixture: ComponentFixture<SprayPeperoncinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprayPeperoncinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprayPeperoncinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

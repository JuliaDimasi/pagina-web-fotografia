import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpConfirmedComponent } from './pop-up-confirmed.component';

describe('PopUpConfirmedComponent', () => {
  let component: PopUpConfirmedComponent;
  let fixture: ComponentFixture<PopUpConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

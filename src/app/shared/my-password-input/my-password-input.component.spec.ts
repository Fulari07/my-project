import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPasswordInputComponent } from './my-password-input.component';

describe('MyPasswordInputComponent', () => {
  let component: MyPasswordInputComponent;
  let fixture: ComponentFixture<MyPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPasswordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

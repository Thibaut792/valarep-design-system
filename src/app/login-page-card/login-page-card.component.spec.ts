import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageCardComponent } from './login-page-card.component';

describe('LoginPageCardComponent', () => {
  let component: LoginPageCardComponent;
  let fixture: ComponentFixture<LoginPageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

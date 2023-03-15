import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLettersCardComponent } from './new-letters-card.component';

describe('NewLettersCardComponent', () => {
  let component: NewLettersCardComponent;
  let fixture: ComponentFixture<NewLettersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLettersCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLettersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

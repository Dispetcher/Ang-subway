import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrankfurtComponent } from './frankfurt.component';

describe('FrankfurtComponent', () => {
  let component: FrankfurtComponent;
  let fixture: ComponentFixture<FrankfurtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrankfurtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrankfurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

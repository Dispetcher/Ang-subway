import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmatyComponent } from './almaty.component';

describe('AlmatyComponent', () => {
  let component: AlmatyComponent;
  let fixture: ComponentFixture<AlmatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

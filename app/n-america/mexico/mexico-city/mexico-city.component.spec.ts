import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicoCityComponent } from './mexico-city.component';

describe('MexicoCityComponent', () => {
  let component: MexicoCityComponent;
  let fixture: ComponentFixture<MexicoCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexicoCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MexicoCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

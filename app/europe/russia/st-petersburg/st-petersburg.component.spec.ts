import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { St.PetersburgComponent } from './st.petersburg.component';

describe('St.PetersburgComponent', () => {
  let component: St.PetersburgComponent;
  let fixture: ComponentFixture<St.PetersburgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ St.PetersburgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(St.PetersburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

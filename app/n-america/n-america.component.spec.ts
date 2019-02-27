import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NAmericaComponent } from './n-america.component';

describe('NAmericaComponent', () => {
  let component: NAmericaComponent;
  let fixture: ComponentFixture<NAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAllComponent } from './result-all.component';

describe('ResultAllComponent', () => {
  let component: ResultAllComponent;
  let fixture: ComponentFixture<ResultAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

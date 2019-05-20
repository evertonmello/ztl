import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientImgComponent } from './gradient-img.component';

describe('GradientImgComponent', () => {
  let component: GradientImgComponent;
  let fixture: ComponentFixture<GradientImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

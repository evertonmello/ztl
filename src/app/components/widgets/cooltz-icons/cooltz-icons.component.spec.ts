import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooltzIconsComponent } from './cooltz-icons.component';

describe('CooltzIconsComponent', () => {
  let component: CooltzIconsComponent;
  let fixture: ComponentFixture<CooltzIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooltzIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooltzIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificItemComponent } from './notific-item.component';

describe('NotificItemComponent', () => {
  let component: NotificItemComponent;
  let fixture: ComponentFixture<NotificItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

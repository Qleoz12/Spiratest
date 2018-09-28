import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayCoolEfectsComponent } from './overlay-cool-efects.component';

describe('OverlayCoolEfectsComponent', () => {
  let component: OverlayCoolEfectsComponent;
  let fixture: ComponentFixture<OverlayCoolEfectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayCoolEfectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayCoolEfectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

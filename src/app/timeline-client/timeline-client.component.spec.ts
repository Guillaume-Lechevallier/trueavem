import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineClientComponent } from './timeline-client.component';

describe('TimelineClientComponent', () => {
  let component: TimelineClientComponent;
  let fixture: ComponentFixture<TimelineClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

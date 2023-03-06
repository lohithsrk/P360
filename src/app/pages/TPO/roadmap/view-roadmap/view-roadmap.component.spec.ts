import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoadmapComponent } from './view-roadmap.component';

describe('ViewRoadmapComponent', () => {
  let component: ViewRoadmapComponent;
  let fixture: ComponentFixture<ViewRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRoadmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

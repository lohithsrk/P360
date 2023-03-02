import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapNavComponent } from './roadmap-nav.component';

describe('RoadmapNavComponent', () => {
  let component: RoadmapNavComponent;
  let fixture: ComponentFixture<RoadmapNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

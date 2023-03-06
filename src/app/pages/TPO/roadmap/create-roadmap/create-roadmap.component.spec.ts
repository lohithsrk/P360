import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoadmapComponent } from './create-roadmap.component';

describe('CreateRoadmapComponent', () => {
  let component: CreateRoadmapComponent;
  let fixture: ComponentFixture<CreateRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRoadmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

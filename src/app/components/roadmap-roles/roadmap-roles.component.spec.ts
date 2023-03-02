import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapRolesComponent } from './roadmap-roles.component';

describe('RoadmapRolesComponent', () => {
  let component: RoadmapRolesComponent;
  let fixture: ComponentFixture<RoadmapRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProejctComponent } from './create-project.component';

describe('CreateProejctComponent', () => {
  let component: CreateProejctComponent;
  let fixture: ComponentFixture<CreateProejctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProejctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProejctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

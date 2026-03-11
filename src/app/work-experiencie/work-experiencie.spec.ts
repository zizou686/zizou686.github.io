import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperiencie } from './work-experiencie';

describe('WorkExperiencie', () => {
  let component: WorkExperiencie;
  let fixture: ComponentFixture<WorkExperiencie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkExperiencie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkExperiencie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

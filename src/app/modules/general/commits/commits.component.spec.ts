import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitComponent } from './commits.component';

describe('AboutComponent', () => {
  let component: CommitComponent;
  let fixture: ComponentFixture<CommitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

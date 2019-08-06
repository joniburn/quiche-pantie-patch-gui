import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDialogComponent } from './result-dialog.component';

describe('ResultDialogComponent', () => {
  let component: ResultDialogComponent;
  let fixture: ComponentFixture<ResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

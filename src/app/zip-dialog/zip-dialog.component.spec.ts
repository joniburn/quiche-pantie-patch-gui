import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipDialogComponent } from './zip-dialog.component';

describe('ZipDialogComponent', () => {
  let component: ZipDialogComponent;
  let fixture: ComponentFixture<ZipDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

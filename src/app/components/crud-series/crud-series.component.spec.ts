import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSeriesComponent } from './crud-series.component';

describe('CrudSeriesComponent', () => {
  let component: CrudSeriesComponent;
  let fixture: ComponentFixture<CrudSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

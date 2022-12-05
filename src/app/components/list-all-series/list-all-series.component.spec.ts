import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSeriesComponent } from './list-all-series.component';

describe('ListAllSeriesComponent', () => {
  let component: ListAllSeriesComponent;
  let fixture: ComponentFixture<ListAllSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

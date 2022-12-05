import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloToolbarComponent } from './titulo-toolbar.component';

describe('TituloToolbarComponent', () => {
  let component: TituloToolbarComponent;
  let fixture: ComponentFixture<TituloToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

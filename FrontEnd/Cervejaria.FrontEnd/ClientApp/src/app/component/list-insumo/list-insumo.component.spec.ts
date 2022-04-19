import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInsumoComponent } from './list-insumo.component';

describe('ListInsumoComponent', () => {
  let component: ListInsumoComponent;
  let fixture: ComponentFixture<ListInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

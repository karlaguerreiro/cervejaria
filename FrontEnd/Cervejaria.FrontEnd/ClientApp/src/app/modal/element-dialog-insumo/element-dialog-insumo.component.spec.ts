import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogInsumoComponent } from './element-dialog-insumo.component';

describe('ElementDialogInsumoComponent', () => {
  let component: ElementDialogInsumoComponent;
  let fixture: ComponentFixture<ElementDialogInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogInsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

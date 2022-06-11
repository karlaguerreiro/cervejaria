import {ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogFornecedorComponent } from './element-dialog-fornecedor.component';

describe('ElementDialogFornecedorComponent', () => {
  let component: ElementDialogFornecedorComponent;
  let fixture: ComponentFixture<ElementDialogFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogFornecedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

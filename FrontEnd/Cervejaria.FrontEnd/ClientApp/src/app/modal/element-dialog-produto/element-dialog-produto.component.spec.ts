import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogProdutoComponent } from './element-dialog-produto.component';

describe('ElementDialogProdutoComponent', () => {
  let component: ElementDialogProdutoComponent;
  let fixture: ComponentFixture<ElementDialogProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogFuncionarioComponent } from './element-dialog-funcionario.component';

describe('ElementDialogFuncionarioComponent', () => {
  let component: ElementDialogFuncionarioComponent;
  let fixture: ComponentFixture<ElementDialogFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

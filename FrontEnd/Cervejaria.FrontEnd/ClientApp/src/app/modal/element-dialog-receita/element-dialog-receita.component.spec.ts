import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogReceitaComponent } from './element-dialog-receita.component';

describe('ElementDialogReceitaComponent', () => {
  let component: ElementDialogReceitaComponent;
  let fixture: ComponentFixture<ElementDialogReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogReceitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

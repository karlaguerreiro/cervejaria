import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogClientComponent } from './element-dialog-client.component';

describe('ElementDialogClientComponent', () => {
  let component: ElementDialogClientComponent;
  let fixture: ComponentFixture<ElementDialogClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementDialogClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

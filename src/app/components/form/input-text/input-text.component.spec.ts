import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModule } from '../form.module';
import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;

  const inputMockData = {
    label: 'Nome do usuário',
    value: 'Douglas Silva',
    readonly: true,
    hint: 'Preencha com o nome do usuário',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextComponent],
      imports: [FormModule]
    });
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the correctly input data', () => {
    component.label = inputMockData.label;
    component.value = inputMockData.value;
    component.readonly = inputMockData.readonly;
    component.hint = inputMockData.hint;
    fixture.detectChanges();

    const element: Element = fixture.nativeElement;
    expect(element).not.toBeNull();

    const inputLabel: Element | null = element.querySelector('mat-form-field mat-label');
    expect(inputLabel?.textContent?.trim()).toEqual(inputMockData.label);

    const inputElement: HTMLInputElement | null = element.querySelector('mat-form-field input');
    expect(inputElement?.value).toEqual(inputMockData.value);
    expect(inputElement?.readOnly).toBeTrue();

    const inputHint: Element | null = element.querySelector('mat-form-field mat-hint');
    expect(inputHint?.textContent?.trim()).toEqual(inputMockData.hint);
  });
});

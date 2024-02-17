import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModule } from '../form.module';
import { InputTextAreaComponent } from './input-text-area.component';

describe('InputTextAreaComponent', () => {
  let component: InputTextAreaComponent;
  let fixture: ComponentFixture<InputTextAreaComponent>;

  const inputMockData = {
    label: 'Nome do usuário',
    value: 'Douglas Silva',
    readonly: true,
    hint: 'Preencha com o nome do usuário',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextAreaComponent],
      imports: [FormModule]
    });
    fixture = TestBed.createComponent(InputTextAreaComponent);
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

    const inputElement: HTMLInputElement | null = element.querySelector('mat-form-field textarea');
    expect(inputElement?.value).toEqual(inputMockData.value);
    expect(inputElement?.readOnly).toBeTrue();

    const inputHint: Element | null = element.querySelector('mat-form-field mat-hint');
    expect(inputHint?.textContent?.trim()).toEqual(inputMockData.hint);
  });
});

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css'],
})
export class InputTextAreaComponent {
  @Input()
  label: string | null = null;

  @Input()
  value: string | null = null;

  @Input()
  readonly: boolean = true;

  @Input({
    required: false,
  })
  hint: string | null = null;
}

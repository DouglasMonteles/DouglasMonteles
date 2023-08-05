import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

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

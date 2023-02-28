import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() icon: String = '';
  @Input() type: String = '';
  @Input() label: String = '';
  @Input() class: String = '';
}

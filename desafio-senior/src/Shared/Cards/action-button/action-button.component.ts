import { Component, Input } from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
  @Input() icon!: string
  @Input() label!: string;
  @Input() type: ButtonType = 'secondary'
  @Input() disabled = false;
}

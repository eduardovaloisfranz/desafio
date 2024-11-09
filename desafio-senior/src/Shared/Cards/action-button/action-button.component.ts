import { Component, Input } from '@angular/core';
import { ColorState } from '../../models/color-state.model';
@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
  @Input() icon!: string
  @Input() iconColor!: ColorState;
  @Input() label!: string;
  @Input() type: ColorState = 'secondary'
  @Input() disabled = false;


  protected get iconColorClass() {
    return this.iconColor ? ` text-${this.iconColor} ` : '';
  }
}

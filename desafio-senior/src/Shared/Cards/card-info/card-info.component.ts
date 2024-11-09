import { Component, Input } from '@angular/core';
import { ColorState } from '../../models/color-state.model';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() subtitle!: string | number;
  @Input() verticalColorState: ColorState = 'primary';
  @Input() showVertical = true;
  @Input() iconColor: ColorState = 'light';
  @Input() titleTextColor!: string;
  @Input() subtitleTextColor!: string;


  protected get verticalColorClass() {
    return `bg-${this.verticalColorState}`
  }

  protected get iconClass() {
    return `${this.icon} text-${this.iconColor}`
  }
}

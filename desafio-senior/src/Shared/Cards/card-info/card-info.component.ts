import { Component, contentChild, Input, TemplateRef } from '@angular/core';
import { ColorState } from '../../models/color-state.model';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss'
})
export class CardInfoComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() subtitle!: string | number | undefined;
  @Input() verticalColorState: ColorState = 'primary';
  @Input() showVertical = true;
  @Input() iconColor: ColorState = 'light';
  @Input() titleTextColor: ColorState = 'dark';
  @Input() subtitleTextColor: ColorState = 'dark-primary';
  @Input() subtitleFontWeight: 'normal' | 'bold' | 'bolder' = 'bold'
  @Input() cardInfoContainerClass = ''

  protected subtitleContent = contentChild<TemplateRef<unknown>>('subtitle');


  protected get verticalColorClass() {
    return `bg-${this.verticalColorState}`
  }

  protected get iconClass() {
    return `${this.icon} text-${this.iconColor}`
  }

  protected get titleColor() {
    return this.titleTextColor ? `text-${this.titleTextColor}` : '';
  }

  protected get subtitleColor() {
    return this.subtitleTextColor ? `text-${this.subtitleTextColor}` : '';
  }
}

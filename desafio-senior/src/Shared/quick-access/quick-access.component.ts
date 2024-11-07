import { Component } from '@angular/core';
import { CardInfoComponent } from '../Cards/card-info/card-info.component';

@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.scss'
})
export class QuickAccessComponent {

}

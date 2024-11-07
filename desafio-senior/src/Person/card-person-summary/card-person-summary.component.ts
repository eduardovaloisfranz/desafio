import { Component } from '@angular/core';
import { CardContainerComponent } from '../../Shared/Cards/card-container/card-container.component';
import { CardTitleComponent } from '../../Shared/Cards/card-title/card-title.component';
import { CardBodyComponent } from '../../Shared/Cards/card-body/card-body.component';

@Component({
  selector: 'app-card-person-summary',
  standalone: true,
  imports: [CardContainerComponent, CardTitleComponent, CardBodyComponent],
  templateUrl: './card-person-summary.component.html',
  styleUrl: './card-person-summary.component.scss'
})
export class CardPersonSummaryComponent {

}

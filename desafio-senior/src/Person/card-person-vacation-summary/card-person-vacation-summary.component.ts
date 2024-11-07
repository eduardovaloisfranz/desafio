import { Component } from '@angular/core';
import { CardContainerComponent } from '../../Shared/Cards/card-container/card-container.component';
import { CardTitleComponent } from '../../Shared/Cards/card-title/card-title.component';
import { CardBodyComponent } from '../../Shared/Cards/card-body/card-body.component';
import { CardInfoComponent } from '../../Shared/Cards/card-info/card-info.component';
import { ActionButtonComponent } from '../../Shared/Cards/action-button/action-button.component';

@Component({
  selector: 'app-card-person-vacation-summary',
  standalone: true,
  imports: [
    CardContainerComponent,
    CardTitleComponent,
    CardBodyComponent,
    CardInfoComponent,
    ActionButtonComponent
  ],
  templateUrl: './card-person-vacation-summary.component.html',
  styleUrl: './card-person-vacation-summary.component.scss'
})
export class CardPersonVacationSummaryComponent {

}

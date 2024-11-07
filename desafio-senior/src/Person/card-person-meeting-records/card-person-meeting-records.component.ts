import { CardBodyComponent } from './../../Shared/Cards/card-body/card-body.component';
import { Component } from '@angular/core';
import { CardContainerComponent } from '../../Shared/Cards/card-container/card-container.component';
import { CardTitleComponent } from '../../Shared/Cards/card-title/card-title.component';
import { ActionButtonComponent } from '../../Shared/Cards/action-button/action-button.component';

@Component({
  selector: 'app-card-person-meeting-records',
  standalone: true,
  imports: [CardContainerComponent, CardTitleComponent, CardBodyComponent, ActionButtonComponent],
  templateUrl: './card-person-meeting-records.component.html',
  styleUrl: './card-person-meeting-records.component.scss'
})
export class CardPersonMeetingRecordsComponent {

}

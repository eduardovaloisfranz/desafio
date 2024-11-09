import { Component } from '@angular/core';
import { ActionButtonComponent } from '../../Shared/Cards/action-button/action-button.component';
import { CardContainerComponent } from '../../Shared/Cards/card-container/card-container.component';
import { CardInfoComponent } from '../../Shared/Cards/card-info/card-info.component';
import { CardTitleComponent } from '../../Shared/Cards/card-title/card-title.component';
import { CardBodyComponent } from './../../Shared/Cards/card-body/card-body.component';
import { ColorState } from '../../Shared/models/color-state.model';
import { PutZeroIfAbsentPipe } from '../../Shared/Pipes/put-zero-if-absent.pipe';

interface MeetingRecord {
  icon: string;
  count: number;
  label: string;
  color: ColorState
}

@Component({
  selector: 'app-card-person-meeting-records',
  standalone: true,
  imports: [
    CardContainerComponent,
    CardTitleComponent,
    CardBodyComponent,
    ActionButtonComponent,
    CardInfoComponent,
    PutZeroIfAbsentPipe
  ],
  templateUrl: './card-person-meeting-records.component.html',
  styleUrl: './card-person-meeting-records.component.scss'
})
export class CardPersonMeetingRecordsComponent {
  meetingRecords: MeetingRecord[] = [
    {
      icon: 'fa-regular fa-calendar',
      count: 10,
      label: 'Reuniões marcadas este mês',
      color: 'warning'
    },
    {
      icon: 'fa-solid fa-check',
      count: 5,
      label: 'Reuniões realizadas este mês',
      color: 'white-primary'
    },
    {
      icon: 'fa-regular fa-calendar-check',
      count: 1,
      label: 'Reuniões com a gestão direta este mês',
      color: 'dark-green'
    }
  ]
}

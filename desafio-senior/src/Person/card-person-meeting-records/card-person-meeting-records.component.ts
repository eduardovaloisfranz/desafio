import { Component } from '@angular/core';
import { ActionButtonComponent } from '@shared/Cards/action-button/action-button.component';
import { CardBodyComponent } from '@shared/Cards/card-body/card-body.component';
import { CardContainerComponent } from '@shared/Cards/card-container/card-container.component';
import { CardInfoComponent } from '@shared/Cards/card-info/card-info.component';
import { CardTitleComponent } from '@shared/Cards/card-title/card-title.component';
import { ColorState } from '@shared/models/color-state.model';
import { PutZeroIfAbsentPipe } from '@shared/Pipes/put-zero-if-absent.pipe';

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


  protected newMeeting() {
    console.log('New meeting event.')
  }
}

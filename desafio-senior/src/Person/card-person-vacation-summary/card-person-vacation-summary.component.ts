import { Component } from '@angular/core';
import { ActionButtonComponent } from '@shared/Cards/action-button/action-button.component';
import { CardBodyComponent } from '@shared/Cards/card-body/card-body.component';
import { CardContainerComponent } from '@shared/Cards/card-container/card-container.component';
import { CardInfoComponent } from '@shared/Cards/card-info/card-info.component';
import { CardTitleComponent } from '@shared/Cards/card-title/card-title.component';
import { PutZeroIfAbsentPipe } from '@shared/Pipes/put-zero-if-absent.pipe';
import { ColorState } from '@shared/models/color-state.model';

interface VacationDetail {
  label: string,
  daysCount: number,
  color: ColorState
}

@Component({
  selector: 'app-card-person-vacation-summary',
  standalone: true,
  imports: [
    CardContainerComponent,
    CardTitleComponent,
    CardBodyComponent,
    CardInfoComponent,
    ActionButtonComponent,
    PutZeroIfAbsentPipe
  ],
  templateUrl: './card-person-vacation-summary.component.html',
  styleUrl: './card-person-vacation-summary.component.scss'
})
export class CardPersonVacationSummaryComponent {
   protected vacationList: VacationDetail[] = [
    {
      label: 'Saldo',
      daysCount: 25,
      color: 'success'
    },
    {
      label: 'Proporcionais',
      daysCount: 25,
      color: 'white-primary'
    },
    {
      label: 'Vencidas',
      daysCount: 0,
      color: 'warning'
    },
    {
      label: 'Dobradas',
      daysCount: 0,
      color: 'danger'

    }
   ]

   protected vacationDetail() {
    console.log('Vacation detail')
   }
}

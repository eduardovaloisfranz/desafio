import { Component } from '@angular/core';
import { CardContainerComponent } from '../../Shared/Cards/card-container/card-container.component';
import { CardTitleComponent } from '../../Shared/Cards/card-title/card-title.component';
import { CardBodyComponent } from '../../Shared/Cards/card-body/card-body.component';
import { CardInfoComponent } from '../../Shared/Cards/card-info/card-info.component';
import { ActionButtonComponent } from '../../Shared/Cards/action-button/action-button.component';
import { PutZeroIfAbsentPipe } from '../../Shared/Pipes/put-zero-if-absent.pipe';
import { ColorState } from '../../Shared/models/color-state.model';


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

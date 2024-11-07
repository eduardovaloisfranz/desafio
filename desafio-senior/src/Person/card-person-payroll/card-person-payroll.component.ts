import { Component } from '@angular/core';
import { CardPersonVacationSummaryComponent } from '../card-person-vacation-summary/card-person-vacation-summary.component';

@Component({
  selector: 'app-card-person-payroll',
  standalone: true,
  imports: [CardPersonVacationSummaryComponent],
  templateUrl: './card-person-payroll.component.html',
  styleUrl: './card-person-payroll.component.scss'
})
export class CardPersonPayrollComponent {

}

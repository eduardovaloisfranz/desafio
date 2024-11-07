import { Component } from '@angular/core';
import { TopbarComponent } from '../../Shared/topbar/topbar.component';
import { BreadcrumbsComponent } from '../../Shared/breadcrumbs/breadcrumbs.component';
import { CardPersonSummaryComponent } from '../card-person-summary/card-person-summary.component';
import { CardPersonMeetingRecordsComponent } from '../card-person-meeting-records/card-person-meeting-records.component';
import { QuickAccessComponent } from '../../Shared/quick-access/quick-access.component';
import { CardPersonPayrollComponent } from '../card-person-payroll/card-person-payroll.component';

@Component({
  selector: 'app-person-analyitcs-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    BreadcrumbsComponent,
    CardPersonSummaryComponent,
    CardPersonMeetingRecordsComponent,
    QuickAccessComponent,
    CardPersonPayrollComponent
  ],
  templateUrl: './person-analyitcs-detail.component.html',
  styleUrl: './person-analyitcs-detail.component.scss'
})
export class PersonAnalyitcsDetailComponent {

}
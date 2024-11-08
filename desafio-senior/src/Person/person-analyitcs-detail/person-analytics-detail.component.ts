import { Component } from '@angular/core';
import { TopbarComponent } from '../../Shared/topbar/topbar.component';
import { BreadcrumbItem, BreadcrumbsComponent } from '../../Shared/breadcrumbs/breadcrumbs.component';
import { CardPersonSummaryComponent, Departament, Person } from '../card-person-summary/card-person-summary.component';
import { CardPersonMeetingRecordsComponent } from '../card-person-meeting-records/card-person-meeting-records.component';
import { QuickAccessComponent } from '../../Shared/quick-access/quick-access.component';
import { CardPersonPayrollComponent } from '../card-person-payroll/card-person-payroll.component';

@Component({
  selector: 'app-person-analytics-detail',
  standalone: true,
  imports: [
    TopbarComponent,
    BreadcrumbsComponent,
    CardPersonSummaryComponent,
    CardPersonMeetingRecordsComponent,
    QuickAccessComponent,
    CardPersonPayrollComponent
  ],
  templateUrl: './person-analytics-detail.component.html',
  styleUrl: './person-analytics-detail.component.scss'
})
export class PersonAnalyticsDetailComponent {
  breadCrumbs: BreadcrumbItem[] = [
    {
      icon: 'fa-solid fa-house text-white-blue'
    },
    {
      label: 'Gestão de pessoas'
    },
    {
      label: 'Analytics'
    }
  ];

  person: Person = {
    companyName: 'VENTURA SOLUÇÕES S/A',
    departament: Departament.SALES,
    name: 'Amanda Aparecida dos Santos',
    jobName: 'Executiva de vendas',
    personId: 1,
    photoUri: 'assets/pictures/user-photo.jpeg',
  }
}

import { Component } from '@angular/core';
import { CardPersonMeetingRecordsComponent } from '../card-person-meeting-records/card-person-meeting-records.component';
import { CardPersonSummaryComponent, Departament, Person } from '../card-person-summary/card-person-summary.component';
import { BreadcrumbItem, BreadcrumbsComponent } from '@shared/breadcrumbs/breadcrumbs.component';
import { QuickAccessComponent } from '@shared/quick-access/quick-access.component';
import { TopbarComponent } from '@shared/topbar/topbar.component';
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
      icon: 'fa-solid fa-house text-white-blue',
      onClick: this.homeClicked.bind(this)
    },
    {
      label: 'Gestão de pessoas',
      onClick: this.peopleManagementClicked.bind(this)
    },
    {
      label: 'Analytics',
      onClick: this.analyticsClicked.bind(this)
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

  protected homeClicked() {
    console.log('Home clicked');
  }

  protected peopleManagementClicked() {
    console.log('People management clicked');
  }

  protected analyticsClicked() {
    console.log('Analytics clicked');
  }
}

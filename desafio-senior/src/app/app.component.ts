import { Component } from '@angular/core';
import { PersonAnalyticsDetailComponent } from '../Person/person-analyitcs-detail/person-analytics-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PersonAnalyticsDetailComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}

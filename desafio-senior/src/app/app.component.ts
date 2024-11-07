import { Component } from '@angular/core';
import { PersonAnalyitcsDetailComponent } from '../Person/person-analyitcs-detail/person-analyitcs-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PersonAnalyitcsDetailComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}

import { Component } from '@angular/core';
import { PersonAnalyctsDetailComponent } from '../Person/person-analyitcs-detail/person-analytcs-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PersonAnalyctsDetailComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}

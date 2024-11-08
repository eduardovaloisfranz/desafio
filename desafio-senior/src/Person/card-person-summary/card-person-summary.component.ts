import { Component, Input } from '@angular/core';
import { CardContainerComponent } from '../../Shared/Cards/card-container/card-container.component';
import { CardTitleComponent } from '../../Shared/Cards/card-title/card-title.component';
import { CardBodyComponent } from '../../Shared/Cards/card-body/card-body.component';
import { CommonModule } from '@angular/common';
export enum Departament {
  SALES = 'Vendas'
}

export interface Person {
  personId: number,
  name: string,
  jobName: string,
  departament: Departament,
  companyName: string
  photoUri: string;
}

@Component({
  selector: 'app-card-person-summary',
  standalone: true,
  imports: [
    CardContainerComponent,
    CardTitleComponent,
    CardBodyComponent,
    CommonModule
  ],
  templateUrl: './card-person-summary.component.html',
  styleUrl: './card-person-summary.component.scss'
})
export class CardPersonSummaryComponent {
  @Input() person!: Person;
}

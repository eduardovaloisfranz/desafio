import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContainerComponent } from '@shared/Cards/card-container/card-container.component';
import { CardTitleComponent } from '@shared/Cards/card-title/card-title.component';
import { CardBodyComponent } from '@shared/Cards/card-body/card-body.component';
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

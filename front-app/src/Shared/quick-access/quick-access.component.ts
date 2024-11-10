import { Component } from '@angular/core';
import { CardInfoComponent } from '@shared/Cards/card-info/card-info.component';

export interface QuickAccessItem {
  icon: string,
  title: string,
  subtitle?: string,
  onClick?: (evt: QuickAccessItem) => any
}

@Component({
  selector: 'app-quick-access',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './quick-access.component.html',
  styleUrl: './quick-access.component.scss'
})
export class QuickAccessComponent {
  quickAccessItems: QuickAccessItem[] = [
    {
      icon: 'fa-solid fa-rocket',
      title: 'Iniciar o tour',
      subtitle: 'Fazer o tour pelo Analytics',
      onClick: this.goToAnalyticsTour.bind(this)
    },
    {
      icon: 'fa-brands fa-stack-exchange',
      title: 'Responder pesquisa',
      onClick: this.answerSurvey.bind(this)
    },
    {
      icon: 'fa-solid fa-user',
      title: 'Pesquisa anônima',
      onClick: this.anonymousSurvey.bind(this)
    },
    {
      icon: 'fa-solid fa-rocket',
      title: 'Pendências SGP',
      onClick: this.sgpPendences.bind(this)
    },
    {
      icon: 'fa-regular fa-file',
      title: 'Ficha registro',
      onClick: this.fileRegister.bind(this)
    },
    {
      icon: 'fa-solid fa-briefcase',
      title: 'Descrição de Cargo',
      onClick: this.descriptionOfJob.bind(this)
    },
    {
      icon: 'fa-solid fa-plane',
      title: 'Programação de férias',
      onClick: this.programmedVacations.bind(this)
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Banco de horas',
      onClick: this.hoursBank.bind(this)
    },
    {
      icon: 'fa-solid fa-user-graduate',
      title: 'Auxílio Educação',
      onClick: this.educationalAid.bind(this)
    },
    {
      icon: 'fa-solid fa-file-waveform',
      title: 'Conferência PPLR',
      onClick: this.conferencePPLR.bind(this)
    },
    {
      icon: 'fa-solid fa-building',
      title: 'Histórico de vínculo',
      onClick: this.historyOfLink.bind(this)
    },
    {
      icon: 'fa-solid fa-mug-saucer',
      title: 'Day off',
      onClick: this.dayOff.bind(this)
    }
  ]

  protected onClickQuickAccess(quickAccessItem: QuickAccessItem) {
    quickAccessItem.onClick?.(quickAccessItem)
  }

  protected goToAnalyticsTour() {
    console.log('Go to analytics tour')
  }

  protected answerSurvey() {
    console.log('Answer survey')
  }

  protected anonymousSurvey() {
    console.log('Anonymous survey')
  }

  protected sgpPendences() {
    console.log('SGP pendences')
  }

  protected fileRegister() {
    console.log('File register')
  }

  protected descriptionOfJob() {
    console.log('Description of job')
  }


  protected programmedVacations() {
    console.log('Programmed vacations')
  }


  protected hoursBank() {
    console.log('Hours bank')
  }

  protected educationalAid() {
    console.log('Educational aid')
  }

  protected conferencePPLR() {
    console.log('Conference PPLR')
  }

  protected historyOfLink() {
    console.log('History of link')
  }

  protected dayOff() {
    console.log('Day off')
  }
}

import { Component, Input } from '@angular/core';

export interface BreadcrumbItem {
  icon?: string;
  label?: string;
  onClick?: (evt: BreadcrumbItem) => any
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: BreadcrumbItem[] = [];

  onClickBreadcrumb(breadcrumb: BreadcrumbItem) {
    if (breadcrumb.onClick) {
      breadcrumb.onClick(breadcrumb);
    }

  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardStatsComponent } from './components/card-stats/card-stats.component';
import { CustomIconsComponent } from './components/custom-icons/custom-icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DynamicFieldComponent } from './dynamic-forms/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { CardPageVisitsComponent } from './components/card-page-visits/card-page-visits.component';
import { CardSocialTrafficComponent } from './components/card-social-traffic/card-social-traffic.component';
import { CardLineChartComponent } from './components/card-line-chart/card-line-chart.component';



@NgModule({
  declarations: [CardPageVisitsComponent,CardLineChartComponent,ButtonComponent,CardStatsComponent,CardSocialTrafficComponent,
    CustomIconsComponent, ModalComponent, DynamicFieldComponent, DynamicFormComponent],
  imports: [CommonModule, FontAwesomeModule, TableModule, PaginatorModule, ReactiveFormsModule, NgSelectModule],
  exports:[ButtonComponent,CardStatsComponent,CardLineChartComponent,CardSocialTrafficComponent,CardPageVisitsComponent,CustomIconsComponent,ModalComponent, TableModule,
    PaginatorModule,  NgSelectModule, DynamicFieldComponent, DynamicFormComponent]
})
export class SharedModule { }

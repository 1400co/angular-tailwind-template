import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CustomIconsComponent } from './components/custom-icons/custom-icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LineasComponent } from './components/lineas/lineas.component';



@NgModule({
  declarations: [ButtonComponent,LineasComponent,
    CustomIconsComponent, ModalComponent],
  imports: [CommonModule, FontAwesomeModule, TableModule, PaginatorModule, ReactiveFormsModule, NgSelectModule],
  exports:[ButtonComponent,  CustomIconsComponent,  ModalComponent, TableModule,LineasComponent,
    PaginatorModule,  NgSelectModule]
})
export class SharedModule { }

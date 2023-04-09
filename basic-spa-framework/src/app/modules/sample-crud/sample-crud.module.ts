import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleCrudRoutingModule } from './sample-crud-routing.module';
import { SampleListComponent } from './pages/sample-list/sample-list.component';
import { SampleFormComponent } from './pages/sample-form/sample-form.component';
import { SampleFormUiComponent } from './components/sample-form-ui/sample-form-ui.component';
import { SampleListUiComponent } from './components/sample-list-ui/sample-list-ui.component';


@NgModule({
  declarations: [
    SampleListComponent,
    SampleFormComponent,
    SampleFormUiComponent,
    SampleListUiComponent
  ],
  imports: [
    CommonModule,
    SampleCrudRoutingModule
  ]
})
export class SampleCrudModule { }

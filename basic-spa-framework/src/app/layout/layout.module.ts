import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    HeaderComponent,
    FooterComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }

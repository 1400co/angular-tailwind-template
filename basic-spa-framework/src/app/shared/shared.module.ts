import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CustomIconsComponent } from './components/custom-icons/custom-icons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ButtonComponent,  CustomIconsComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports:[ButtonComponent,  CustomIconsComponent]
})
export class SharedModule { }

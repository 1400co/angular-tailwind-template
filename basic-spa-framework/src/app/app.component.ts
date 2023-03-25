import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TemplateColor } from './core/models/template-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-spa-framework';
  templateColor : TemplateColor =  environment.templateColor as TemplateColor;
}

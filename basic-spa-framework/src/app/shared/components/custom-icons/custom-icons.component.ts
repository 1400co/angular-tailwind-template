import { Component, Input } from '@angular/core';
import {  IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as fasolid from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fw-custom-icons',
  templateUrl: './custom-icons.component.html',
  styleUrls: ['./custom-icons.component.scss']
})


export class CustomIconsComponent {
@Input() iconName: string = ""
public iconValue:IconDefinition = fasolid.fa0;

ngOnInit(): void {

    switch (this.iconName) {
      case "faGauge":
          this.iconValue = fasolid.faGauge;
          break;
      case "faBars":
          this.iconValue = fasolid.faBars;
          break;
      case "faEllipsisVertical":
            this.iconValue = fasolid.faEllipsisVertical;
            break;
      case "faGear":
            this.iconValue = fasolid.faGear;
            break;
      case "faAngleLeft":
              this.iconValue = fasolid.faAngleLeft;
              break;
      case "faAngleUp":
              this.iconValue = fasolid.faAngleUp;
              break;
      case "faCaretDown":
                this.iconValue = fasolid.faCaretDown;
                break;
      case "faFlag":
                  this.iconValue = fasolid.faFlag;
                  break;
      case "faMagnifyingGlass":
                  this.iconValue = fasolid.faMagnifyingGlass;
                  break;
      case "faPlus":
                  this.iconValue = fasolid.faPlus;
                  break;
      case "faUser":
                    this.iconValue = fasolid.faUser;
                    break;
      case "faShareFromSquare":
          this.iconValue = fasolid.faShareFromSquare;
          break;
      case "faSpinner":
                    this.iconValue = fasolid.faSpinner;
                    break;
      default:
        this.iconValue = fasolid.fa0;
          break;
      }

  }
}

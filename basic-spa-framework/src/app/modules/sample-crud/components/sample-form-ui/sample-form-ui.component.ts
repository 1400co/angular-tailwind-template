import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldDefinition } from 'src/app/shared/dynamic-forms/field-definition';
import { Country } from '../../models/country';
import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-sample-form-ui',
  templateUrl: './sample-form-ui.component.html',
  styleUrls: ['./sample-form-ui.component.scss']
})
export class SampleFormUiComponent {
  country: Country;
  countryDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true,
      data:null,
      keyValue:"",
      labelValue:""

    },
    { key: 'name',
      type: 'string',
      isId: false,
      label: 'Country Name',
      required: true,
      data:null,
      keyValue:"",
      labelValue:""
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true,
      data:null,
      keyValue:"",
      labelValue:""
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: AppDataService)
              {

              }

  createCountry(country: Country) {
    country.id = 0;
    this.errorMessage = null;
    this.dataService.createCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/country-maint']),
      err => this.errorMessage = 'Error creating country'
      );
  }

  // cambiar(){
  //   this.countryDefinition.push({
  //     key: 'Nuevo',
  //     type: 'string',
  //     isId: false,
  //     label: 'Nuevo',
  //     required: true,
  //     data:null,
  //     keyValue:"",
  //     labelValue:""
  //   });
  // }


  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.country = { id: 0, name: "", epiIndex: null };
    }
    else
      this.dataService.getCountry(this.route.snapshot.params['id'])
        .subscribe((country: Country) => this.country = country);


  }



  updateCountry(country: Country) {
    this.errorMessage = null;
    this.dataService.updateCountry(country).subscribe(
      c => this.router.navigate(['/authenticated/country-maint']),
      err => this.errorMessage = 'Error updating country'
      );
  }

}

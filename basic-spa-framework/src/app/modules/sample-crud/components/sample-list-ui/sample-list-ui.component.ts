import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../models/country';
import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-sample-list-ui',
  templateUrl: './sample-list-ui.component.html',
  styleUrls: ['./sample-list-ui.component.scss']
})
export class SampleListUiComponent {

  countries : Array<Country>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService,
              private router: Router) {
    dataService.getCountries().subscribe((data) => this.countries = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  createCountry() {
    this.router.navigate(['/app/demo/detail', 0, 'create']);
  }

  deleteCountry(id: number) {
    this.isDeleting = true;
    this.dataService.deleteCountry(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
      );
  }

  deleteCountryQuestion(id:number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editCountry(id: number) {
    this.router.navigate(['/app/demo/detail', id, 'edit']);
  }

  showCountryDetail(id: number) {
    this.router.navigate(['/app/demo/detail', id, 'details']);
  }

}

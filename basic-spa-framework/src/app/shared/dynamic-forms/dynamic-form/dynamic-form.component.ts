import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FieldDefinition } from '../field-definition';

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges, OnInit {

  viewModel:any;
  viewModelDefinition:Array<FieldDefinition>;

  @Input()
  set vm(data:any)
  {
    if(data)
    {
      this.viewModel = data;
      this.checkAndInitForm();
    }
  };

  @Input()
  set vmDefinition(data: Array<FieldDefinition>)
  {
    if(data)
    {
      this.viewModelDefinition = data;
      this.checkAndInitForm();
    }
  }

  @Input() operation: string;
  @Input() errorMessage: string;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  status: string;
  submitted = false;
  vmCopy: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location)
              {

              }


  private checkAndInitForm() {
    if (this.viewModel && this.viewModelDefinition) {
      this.clearForm();
    }
  }

  clearForm() {
    debugger
    if(!this.viewModelDefinition)
      return;

    let group = {};
    this.vmCopy = Object.assign({}, this.viewModel);
    this.viewModelDefinition.forEach(field => {
      group[field.key] = field.required ? new FormControl(this.vmCopy[field.key], Validators.required)
                                              : new FormControl(this.vmCopy[field.key]);
    });
    this.form = new FormGroup(group);
  }

  ngOnChanges(changes: SimpleChanges) {
     if (changes['errorMessage'].currentValue && this.status === 'waiting') {
       this.status = "";
     }
     if (changes['viewModel'] && changes['viewModelDefinition']) {
      this.clearForm();
     }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.operation = params['operation'];

     });


  }

  onBack() {
    this.errorMessage = null;
    this.location.back();
  }

  onCancel() {
    this.onBack();
  }

  onCreate() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.create.emit(this.form.value);
    }
  }

  onEdit() {
    this.router.navigate(['../', 'edit'], { relativeTo: this.route});
  }

  onSave() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.update.emit(this.form.value);
    }
  }
}

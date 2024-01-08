import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recovery-form',
  templateUrl: './password-recovery-form.component.html',
  styleUrls: ['./password-recovery-form.component.scss']
})
export class PasswordRecoveryFormComponent {

  form: FormGroup;
  @Output() recover= new EventEmitter();
  @Input() successMessage: string = '';
  @Input() errorMessage: string = '';


  constructor(private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
          userName: ['', [Validators.required]],
        });
  }

  onSubmit() {
    console.log(this.form)
    if (this.form.valid) {

      this.recover.emit(this.form.value);
    }
  }

  field(name: string) {
    const control = this.form.get(name);
    return {
      control: control,
      touched: () => control.touched,
      valid: () => control.valid,
      isInvalid:() => control.touched && !control.valid
    };
  }
}

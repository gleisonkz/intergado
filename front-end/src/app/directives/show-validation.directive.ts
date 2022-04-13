import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, FormGroup } from '@angular/forms';

import { VALIDATIONS } from './validations';

@Directive({
  selector: '[gdShowValidation]',
})
export class ShowValidationDirective implements AfterContentInit {
  @Input('gdShowValidation') controlName: string;

  constructor(private elementRef: ElementRef, private container: ControlContainer) {}

  ngAfterContentInit(): void {
    const formGroup = this.container.control as FormGroup;
    const formControl = formGroup.controls[this.controlName] as FormControl;

    const validate = () => {
      const errorMessage = this.getErrorMessage(formControl);
      const errorMessageParent = this.getErrorMessage(formGroup);
      const error = errorMessage || errorMessageParent;
      this.setInnerHTML(error);
    };

    formControl.statusChanges.subscribe(() => validate());
    validate();
  }

  private setInnerHTML(html: string) {
    this.elementRef.nativeElement.innerHTML = html;
  }

  private getErrorMessage(control: AbstractControl): string {
    return VALIDATIONS.find((validationObj) => control.hasError(validationObj.errorName))?.messageFn(control) || '';
  }
}

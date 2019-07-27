import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-build-resume',
  templateUrl: './build-resume.component.html',
  styleUrls: ['./build-resume.component.css']
})
export class BuildResumeComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group(
      {
        firstCtrl: ['', Validators.required],
        firstCtrlOne: ['', Validators.required],
        firstCtrlTwo: ['', Validators.required],
        firstCtrlThree: ['', Validators.required],
        firstCtrlFour: ['', Validators.required]
      }
    );

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }
    );

    this.thirdFormGroup = this._formBuilder.group(
      {
        thirdCtrl: ['', Validators.required],
        thirdCtrlOne: ['', Validators.required],
        thirdCtrlTwo: ['', Validators.required],
      }
    );

    this.fourthFormGroup = this._formBuilder.group(
      {
        fourthCtrl: ['', Validators.required],
        fourthCtrlOne: ['', Validators.required],
        fourthCtrlTwo: ['', Validators.required],
        fourthCtrlThree: ['', Validators.required]
      }
    );

    this.fifthFormGroup = this._formBuilder.group(
      {
        fifthCtrl: ['', Validators.required],
        fifthCtrlOne: ['', Validators.required],
        fifthCtrlTwo: ['', Validators.required],
        fifthCtrlThree: ['', Validators.required]
      }
    );
  }
}

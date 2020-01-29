import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder)
  {

  }

  ngOnInit() {
    this.signInFormGroup=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      check:['',Validators.requiredTrue]
    });
  }
  submit()
  {
    console.log(this.signInFormGroup.value);
  }

}
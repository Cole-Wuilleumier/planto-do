import { Component, Inject} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[FormBuilder]
})
export class SignupComponent {
  signup_form: FormGroup;
  user: User;
  
  constructor(
    fb:FormBuilder
  ){
    this.signup_form = fb.group({
      name:'',
      email:''
    });

  }

}

import { Component, Inject} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from './password-validator';

import { User } from '../classes/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[FormBuilder]
})
export class SignupComponent {
  signup_form: FormGroup;
  user: User;
  message: string;

  constructor(
    private fb:FormBuilder,
    private userService: UserService,
  ){
    this.signup_form = fb.group({
        name: ['Cole Wuilleumier', Validators.compose([Validators.required, Validators.pattern("^[ A-Za-z ]+"), Validators.minLength(3), Validators.maxLength(30)])],
        email: ['crwuilleumier@gmail.com', Validators.compose([Validators.required, Validators.pattern("^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[A-Za-z0-9]([A-Za-z0-9-]*[a-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?)*$")])],
        password: ['password', Validators.compose([Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}'), Validators.minLength(6)])],
        confirmPassword: ['password', Validators.required]},
        {
          validator: PasswordValidation.MatchPassword // your validation method
        }
      );
  }


  onSubmit() {
    if(this.signup_form.valid){
      this.user = new User(
        null,
        this.signup_form.controls['name'].value,
        this.signup_form.controls['email'].value,
        this.signup_form.controls['password'].value
      );

      this.userService.create(this.user)
          .subscribe(
              data => {
                if(!data.success){
                  this.message = data.message;
                } else {
                 // this.router.navigate(['/login']);
                 console.log("User added");
                }
                },
              error => {
                  this.message = "An error has occured. Try refreshing page.";
              });

    } else {
      console.log("Not valid");
    }
  }

  

}

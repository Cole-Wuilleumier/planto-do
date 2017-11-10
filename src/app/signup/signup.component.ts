import { Component, OnInit } from '@angular/core';

import { User } from '../classes/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  model = new User(null, 'Cole');
  submitted = false;

  onSubmit(){ this.submitted = true; }
  
  //TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}

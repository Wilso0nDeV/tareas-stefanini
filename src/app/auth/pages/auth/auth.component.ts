import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  formLogin : FormGroup
  validateMessage : boolean = false;
  message : string = ''
  constructor() { 
    this.formLogin = new FormGroup({
      usuario: new FormControl(null, [Validators.required]),
      contrasena: new FormControl(null, [Validators.required]),
    });

   }

  ngOnInit(): void {

  }


  sendLogin(){

  }
}

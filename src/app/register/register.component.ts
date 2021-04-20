import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  mForm: FormGroup
  isSent = false

  constructor(private router: Router, private fb: FormBuilder) {

    this.mForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$")]],
      pass: ["", [Validators.required, Validators.minLength(5)]]
    })

   }

  ngOnInit() {
  }

  login() {
    this.router.navigate(["/login"])
  }

  get f(): any {
    return this.mForm.controls
  }

  // Se ejecuta cuando pulso enviar el form
  onSave() {
    console.log("Enviar formulario", this.f)
    this.isSent = true

    if(this.mForm.invalid) {
      console.log("Error en el formulario")
      return
    }

    console.log("Todo va bien, enviar a la API")

  }
}

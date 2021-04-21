import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.scss']
})
export class DetailPeopleComponent implements OnInit {

  isEditMode = false
  mForm: FormGroup

  constructor( private active: ActivatedRoute, private fb: FormBuilder, private notifier: NotifierService) {

    this.mForm = this.fb.group({
      name: ["", Validators.required],
      job: ["", Validators.required],
      photo: ["", Validators.required],
      date: ["", Validators.required],
      bio: ["", Validators.required],
    })

  }

  ngOnInit() {

    this.active.params.subscribe( params => {
      if(params.id) {
        this.isEditMode = true
      } else {
        this.isEditMode = false
      }
    })

  }

  get f(): any {
    return this.mForm.controls
  }


  onSave() {

    console.log("Nombre:", this.f.name.value)
    console.log("Profesion:", this.f.job.value)
    console.log("F. Nacimiento:", this.f.date.value)

    if(this.mForm.invalid) {
      this.notifier.notify('error', 'Comprueba todos los campos');
      return
    }

    // TODO llamar a api para guardar
    this.notifier.notify('success', 'Datos guardados');

  }

  editar() {

    this.mForm.patchValue({
      name: "Andrey",
      job: "Profe"
    })

  }
}

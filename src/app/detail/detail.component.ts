import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private active: ActivatedRoute) { }

  ngOnInit() {
    // Pilla de la URL el id
    this.active.params.subscribe( params => {
      console.log(params.iduser);

    })
    // TODO Hacer peticion a API con Don Maquinon Alberthor el pAPI Manager
  }

}

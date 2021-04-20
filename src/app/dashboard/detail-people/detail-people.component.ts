import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.scss']
})
export class DetailPeopleComponent implements OnInit {

  isEditMode = false

  constructor( private active: ActivatedRoute) { }

  ngOnInit() {

    this.active.params.subscribe( params => {
      if(params.id) {
        this.isEditMode = true
      } else {
        this.isEditMode = false
      }
    })

  }

}

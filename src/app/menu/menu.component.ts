import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  bgWhite = true

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe( ruta => {
      if(ruta instanceof NavigationEnd) {

        if(ruta.url == "/") {
          this.bgWhite = false
        } else {
          this.bgWhite = true
        }

      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slider,fader} from '../../shared/route-animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations :[fader]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet:RouterOutlet)
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Publicas } from 'src/models/parametricas.model';

@Component({
  selector: 'app-dashboardpages',
  templateUrl: './dashboardpages.component.html',
  styleUrls: ['./dashboardpages.component.css']
})
export class DashboardpagesComponent implements OnInit {
  @Input() componenteactivo: string;
  @Input() publicas: Publicas;
  constructor() { }


  ngOnInit() {
  }

}

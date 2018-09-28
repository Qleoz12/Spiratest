import { Component, OnInit } from '@angular/core';
import { InfoProductosService } from '../../services/info-productos.service';

@Component({
  selector: 'app-overlay-cool-efects',
  templateUrl: './overlay-cool-efects.component.html',
  styleUrls: ['./overlay-cool-efects.component.css']
})
export class OverlayCoolEfectsComponent implements OnInit {

  constructor(private InfoProductosService: InfoProductosService) 
  {
    
   }

  ngOnInit() {
  }

}

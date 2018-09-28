import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//interface
import { infoProductos } from '../interfaces/info_productos.intarface';


@Injectable({
  providedIn: 'root'
})
export class InfoProductosService {

  info: Array<infoProductos>;
  cargada=false;
 
  
  constructor(private http: HttpClient)
  {
    
    this.http.get('https://spiratest-b3e4d.firebaseio.com/productos.json')
          .subscribe( (resp: Array<infoProductos>)=>{

            this.cargada=true;
            this.info=resp;
            console.log(resp);
          })
  }

  
}

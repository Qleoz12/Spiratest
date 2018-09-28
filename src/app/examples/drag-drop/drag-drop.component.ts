import { Component, OnInit } from '@angular/core';
import { InfoProductosService } from '../../services/info-productos.service';
import { Productos } from '../../models/productos';



@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})


export class DragDropComponent {

 

  state=0;
  

  //carro
  productos: Productos[]= [];
  valortotal=0;
  numeroDeProductos=0;

  constructor(private InfoProductosService: InfoProductosService) 
  {

  }

  drop(ev) 
  {
    ev.preventDefault();
    let nombre = ev.dataTransfer.getData("nombre");
    let marca = ev.dataTransfer.getData("marca");
    let precio = ev.dataTransfer.getData("precio");

    //console.log(nombre +" "+ marca +" "+precio);
    this.addproduct(new Productos(nombre,marca,'0',precio));
    console.log(this.productos);
    //console.log("drop");
    
    this.state=-1;
    
  }

  
  addproduct(producto:Productos)
  {
    let sproducto: Productos=  this.productos.find(x => x.nombre == producto.nombre && x.marca == producto.marca );
    if (sproducto) 
    {
      let index = this.productos.indexOf(sproducto);
      sproducto.cantidad=sproducto.cantidad+1;
      let valortotal= parseFloat(producto.precio.replace('€',''))*sproducto.cantidad;
      sproducto.precio=valortotal+"€";

      this.productos[index] = sproducto;
      

    } else 
    {
      this.productos.push(producto);
    }

    //gettotal
    this.valortotal=0;
    this.numeroDeProductos=0;
    for (let i = 0; i < this.productos.length; i++) 
    {
      this.valortotal+=parseInt(this.productos[i].precio);
      this.numeroDeProductos+=this.productos[i].cantidad;
      console.log(this.valortotal)
    }
    

    
  }

  allowDrop(ev) {
    ev.preventDefault();
    
    //some 
    //console.log(ev.pageY);
    //console.log("scroll"+window.scrollY);
    if(ev.pageY>500 && window.scrollY>300 )
    {
      window.scrollTo(ev.pageX, ev.clientY-600);
    }   
    
    
  }


  drag(ev, nombre,marca,precio) 
  {
    ev.dataTransfer.setData("nombre", nombre);
    ev.dataTransfer.setData("marca", marca);
    ev.dataTransfer.setData("precio", precio);
    console.log('drag');
    this.state=1;
  }

  
  onDragEnd(event) {
    console.log('drag end');
    this.state=-1;
    event.preventDefault();
  }

}

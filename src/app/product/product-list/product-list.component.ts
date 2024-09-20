import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  mostrarImagen():void{

    this.muestraImg=!this.muestraImg

  }

  productos:any[]=[{

    "ProductoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas",
    "Year":"marzo 2021",
    "Precio": 120000,
    "Color": "Blanco",
    "Marca":"Chevrolet",
    "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF9aUwnC6JHSCMi9JRqLqmM1yn_qQjlBy8w&s"




  },

  {
    "ProductoId":2,
    "Modelo":"Chevy",
    "Descripcion":"4 puertas",
    "Year":"enero 2021",
    "Precio": 340000,
    "Color": "Azul",
    "Marca":"Chevrolet",
    "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gLhzgAE_QTWX-qKQS6eJAXuYmIpOkpNCRg&s"

  },

  {
    "ProductoId":3,
    "Modelo":"Honda",
    "Descripcion":"2 puertas",
    "Year":"julio 2021",
    "Precio": 220000,
    "Color": "Rojo",
    "Marca":"Chevrolet",
    "ImagenUrl":"https://phantom-expansion.unidadeditorial.es/3c62f89478429cfe840a42eb3fc1d4d6/crop/0x0/1300x598/resize/828/f/webp/assets/multimedia/imagenes/2022/05/26/16535733351867.jpg"

  }

    
  ]


  
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { group } from '@angular/animations';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})

  export class ZodiacoComponent implements OnInit {
  
    zodiaco!: FormGroup;
    edad: number = 0;
    signo: string = '';
    imagenSigno: string = '';
  
    constructor() {}
  
    ngOnInit(): void {
      this.zodiaco= new FormGroup({
        nombre: new FormControl('', Validators.required),
        paterno: new FormControl('', Validators.required),
        materno: new FormControl('', Validators.required),
        dia: new FormControl('', Validators.required),
        mes: new FormControl('', Validators.required),
        año: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required)
      });
    }
  
    calcularEdad(): number {
      const añoNacimiento = this.zodiaco.get('año')?.value;
      const mesNacimiento = this.zodiaco.get('mes')?.value;
      const diaNacimiento = this.zodiaco.get('dia')?.value;
      const fechaActual = new Date();
  
  
      let edad = fechaActual.getFullYear() - añoNacimiento;

  
     const mesActual = fechaActual.getMonth() + 1; 
     const diaActual = fechaActual.getDate();

  
      if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
      }

      return edad;
    }
  
    Signo(): string {
      const año = this.zodiaco.get('año')?.value;
      const Zodiaco = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
      const indice = (año - 1900) % 12;
      return Zodiaco[indice];
    }

   
  
    imprimir(): void {
      this.edad = this.calcularEdad();
      this.signo = this.Signo();

  
      if (this.signo === 'Rata') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/809/579/png-transparent-rat-mouse-chinese-zodiac-chinese-calendar-the-12-chinese-zodiacs-thumbnail.png';
      } else if (this.signo === 'Buey') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/917/677/png-transparent-ox-chinese-new-year-chinese-zodiac-chinese-astrology-chinese-new-year-mammal-holidays-cow-goat-family-thumbnail.png';
      } else if (this.signo === 'Tigre') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/734/742/png-transparent-tiger-chinese-zodiac-chinese-new-year-rat-tiger-food-animals-dragon-thumbnail.png';
      } else if (this.signo === 'Conejo') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/345/153/png-transparent-chinese-zodiac-rabbit-astrology-rabbit-horse-food-animals-thumbnail.png';
      } else if (this.signo === 'Dragón') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/847/353/png-transparent-gold-dragon-illustration-china-chinese-dragon-chinese-zodiac-chinese-dragon-festive-dragon-chinese-style-fictional-character-thumbnail.png';
      } else if (this.signo === 'Serpiente') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/817/245/png-transparent-china-snake-chinese-zodiac-chinese-new-year-snake-horse-animals-text-thumbnail.png';
      } else if (this.signo === 'Caballo') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/314/13/png-transparent-horse-chinese-zodiac-goat-chinese-calendar-chinese-zodiac-horse-animals-logo-thumbnail.png';
      } else if (this.signo === 'Cabra') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/767/589/png-transparent-goat-chinese-zodiac-rabbit-astrological-sign-zodiac-sheep-horse-animals-carnivoran-thumbnail.png';
      } else if (this.signo === 'Mono') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/7/467/png-transparent-chinese-zodiac-monkey-chinese-calendar-chinese-new-year-chinese-zodiac-animals-dragon-tiger-thumbnail.png';
      } else if (this.signo === 'Gallo') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/524/346/png-transparent-rooster-chicken-symbol-chinese-zodiac-cock-animals-galliformes-horoscope-thumbnail.png';
      } else if (this.signo === 'Perro') {
        this.imagenSigno = 'https://w7.pngwing.com/pngs/903/79/png-transparent-dog-chinese-new-year-chinese-calendar-chinese-zodiac-horse-lunar-new-year-horse-animals-dragon-thumbnail.png';
      } else if (this.signo === 'Cerdo') {
      this.imagenSigno = 'https://w7.pngwing.com/pngs/434/822/png-transparent-pig-chinese-zodiac-astrological-sign-dog-rooster-pig-food-animals-tiger-thumbnail.png';
      }

      

    }
  }
  




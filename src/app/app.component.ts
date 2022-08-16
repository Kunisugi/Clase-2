import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi_primera_vez';
  edad: number = 30;
  direccion: string = "Calle falsa 1234";
  resultado: number=0;
  sumar(numero1: number, numero2: number): number{
    return numero1 + numero2;
  }
  potencia(numbero1: number, numbero2: number): number{
    return numbero1 ** numbero2;
  }

  sumarDos(): void {
    this.resultado = this.resultado + 2
  }
}


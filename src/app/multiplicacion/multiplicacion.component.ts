import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {
numero:number=0;
veces:number=0;
resultado:number=0;
mostrar:string='';

calcular(){
  this.mostrar='';
  this.resultado=0;

  for (let i = 0; i < this.veces; i++) {
    this.resultado += this.numero;
    this.mostrar += this.numero.toString();
    if (i < this.veces - 1) {
      this.mostrar += '+';
    }
}
}}

import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {

  grados='';
  
  resultado:number=0;
  operacion:string='';

  calcular(){
    switch(this.operacion){
      case 'farenheit':
        this.resultado=(parseFloat(this.grados)-32) * (5/9);
        break;
      case 'celsius':
        this.resultado=(parseFloat(this.grados)*(9/5))+32;
        break;
     
    }
  }

}

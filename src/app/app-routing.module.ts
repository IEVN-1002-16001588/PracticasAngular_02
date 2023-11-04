import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CinepolisComponent } from "./cinepolis/cinepolis.component";
import { TemperaturaComponent } from "./temperatura/temperatura.component";
import { MultiplicacionComponent } from "./multiplicacion/multiplicacion.component";

const routes:Routes=[
    {path:'',redirectTo: '/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
   {path:'cine',component:CinepolisComponent},
   {path:'temperatura',component:TemperaturaComponent},
   {path:'multiplicar',component:MultiplicacionComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
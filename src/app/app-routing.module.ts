import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShapeComponent} from "./shape/shape.component";
import {BoardComponent} from "./board/board.component";
import {CardComponent} from "./card/card.component";
import {TimerComponent} from "./timer/timer.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path:'' , component:BoardComponent},
  {path:'shape' , component:ShapeComponent},
  {path:'card' , component:CardComponent},
  {path:'timer' , component:TimerComponent},
  {path:'test' , component:TestComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

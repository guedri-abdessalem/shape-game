import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeComponent } from './shape/shape.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { TimerComponent } from './timer/timer.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShapeComponent,
    CardComponent,
    BoardComponent,
    TimerComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule
  ],

  // exports: [ShapeComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

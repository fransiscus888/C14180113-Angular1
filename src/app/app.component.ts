import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  player=1
  baris:number
  kolom:number
  board:String[]=["*****","*****","*****","*****","*****"]

  play(){
    




  }

}

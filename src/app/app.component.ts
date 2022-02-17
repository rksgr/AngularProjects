import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from India!';
  imgUrl="";

  ngOnInit():void{
    this.title= "Hello from Indians!";
    this.imgUrl="./assets/Road_less_travelled.jpg";
  }
}

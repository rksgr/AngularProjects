import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from India!';
  imgUrl="";
  url="";

  ngOnInit():void{
    this.title= "Hello from Indians!";
    this.imgUrl="./assets/Road_less_travelled.jpg";
    this.url="https://www.bridgelabz.com";
  }
  onClick($event: any): void{
    console.log("Logo is clicked",$event);
    window.open(this.url, "_blank");
  }
}

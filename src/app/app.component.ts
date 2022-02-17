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
  userName: string="";
  nameError: string="";

  //UC 1: Data Binding: Display name
  //UC 2: Property binding- Display logo
  ngOnInit():void{
    this.title= "Hello from Indians!";
    this.imgUrl="./assets/Road_less_travelled.jpg";
    this.url="https://www.bridgelabz.com";
  }
  //UC 3: Event Binding: Navigate to Bridgelabz website on clicking logo
  onClick($event: any): void{
    console.log("Logo is clicked",$event);
    window.open(this.url, "_blank");
  }
  // UC 5: Validate name field and display error
  onInput($event: any){
    console.log("change event occurred",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
    this.nameError= "Name is incorrect";
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from India!';


  ngOnInit():void{
    this.title= "Hello from Indians!";
  }
}

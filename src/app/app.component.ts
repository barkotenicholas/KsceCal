import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name!: string;
  submit(details: any){
    console.log(details)
    console.log(this.name)
  }
}

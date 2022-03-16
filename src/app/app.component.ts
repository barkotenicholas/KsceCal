import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name!: string;
  math!: string;
  eng!: string;
  kisw!: string;
  bio!: string;
  chem!: string;
  his!: string;
  biz!: string;
  agri!: string;
  geo!: string;
  phy!: string;
  ho!:string;

  submit(details: any){
    console.log(details)

    console.log(this.name)

    console.log(this.math)

    console.log(this.geo)

    console.log(this.kisw)

    console.log(this.eng)

    console.log(this.his)

    console.log(this.geo)

    console.log(this.ho)

    console.log(this.agri)

    console.log(this.biz)

  }
}

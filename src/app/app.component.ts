import { Component } from '@angular/core';
import { Calculator } from './calculator';

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
   

  const cal = new Calculator(this.name,this.math,this.eng,this.kisw,this.bio,this.chem,this.biz,this.agri);
   
    cal.add()
  
    console.log("This is total :"+cal.display())
  }
}

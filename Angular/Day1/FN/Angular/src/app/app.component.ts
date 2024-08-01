import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name:string
  age:Number
  email:string
  fname:string
  flag:boolean;
  players:string[];
  selectvehicle:string;
  mystyle:{};
  myclass:string
  sum:number
  difference:number
  constructor(private calc:CalculatorService)
  {
    this.name="Sutharsan";
    this.age=20;
    this.email="sutharsanmurugan87@gmail.com";
    this.fname="";
    this.flag=true;
    this.players=["Two Wheeler","Three Wheeler","Four Wheeler"];
    this.selectvehicle="";
    this.mystyle={'width':'40%','border':'2px solid green','border-radius':'25px'};
    this.myclass="MyClass1";
    this.sum=calc.getAddition(10,20);
    this.difference=calc.getSubtraction(20,10);
  }
  setSelectedItem(vec: string)
  {
    this.selectvehicle=vec;
  }
  changestyle()
  {
    this.mystyle={'width':'40%','border':'2px solid black'};
  }
  changeflag()
  {
    this.flag= !this.flag;
  }
  changeName()
  {
    this.name="Dhanush"
  }
  changeage()
  {
    this.age=24;
  }
  changeemail()
  {
    this.email="sutharsanm879@gmail.com"
  }
}

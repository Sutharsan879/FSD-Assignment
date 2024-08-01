import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  name:string
  age:Number
  email:string
  fname:string
  flag:boolean;
  players:string[];
  selectvehicle:string;
  mystyle:{};
  myclass:string
  constructor()
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

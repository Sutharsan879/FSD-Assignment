import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
   name:string=''
   email:string=''
   id:number=0
   select:string="Select Option"
   password:string=''

   displayname:string=''
   displayemail:string=''
   displayid:number=0
   displayselect:string=''
   displaypass:string=''

   display()
   {
    this.displayname=this.name
    this.displayemail=this.email
    this.displayid=this.id
    this.displayselect=this.select
    this.displaypass=this.password
   }
}

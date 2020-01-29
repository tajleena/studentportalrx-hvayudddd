import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
students=[
  {id:1,name:"Dipti",emailId:"dipti@gmail.com",department:"Engineering",password:"1234"},
{id:2,name:"leena",emailId:"leena@gmail.com", department:"Deep Studies",password:"1234"},

{id:3,name:"stuti",emailId:"stuti@gmail.com", department:"Arts",password:"1234"}
]
constructor(private router:Router){

}

  ngOnInit() {
  }
// showList(){
//     this.router.navigateByUrl('/add-student');
//   }
}
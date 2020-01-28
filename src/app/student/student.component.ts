import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
students=[
  {id:1,name:"Dipti",emailId:"dipti@gmail.com"},
{id:2,name:"Dipti",emailId:"dipti@gmail.com"},

{id:3,name:"Dipti",emailId:"dipti@gmail.com"}
]
constructor(private router:Router){

}

  ngOnInit() {
  }
// showList(){
//     this.router.navigateByUrl('/add-student');
//   }
}
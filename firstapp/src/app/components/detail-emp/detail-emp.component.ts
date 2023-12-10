import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Employe} from "../../employe";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceEmpService} from "../../services/service-emp.service";

@Component({
  selector: 'app-detail-emp',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './detail-emp.component.html',
  styleUrl: './detail-emp.component.css'
})
export class DetailEmpComponent implements OnInit{
  id:number=0;
  emp:Employe=new Employe();
  constructor(private route:ActivatedRoute,private router:Router,
    private empService: ServiceEmpService){}
  ngOnInit(){

    this.id=this.route.snapshot.params['id'];
    this.empService.getEmp(this.id).subscribe(
      data=>{
        console.log(data)
        this.emp=data;
      },error=>console.log(error));
  }
  updateEmp(){
    this.empService.updateEmp(this.id,this.emp).subscribe(
      data=>console.log(data),
      error=>console.log(error));

    this.router.navigate(['/list']);
  }


}

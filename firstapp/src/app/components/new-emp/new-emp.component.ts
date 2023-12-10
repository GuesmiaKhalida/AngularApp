import { Component } from '@angular/core';
import {Employe} from "../../employe";
import {ServiceEmpService} from "../../services/service-emp.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-emp',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-emp.component.html',
  styleUrl: './new-emp.component.css'
})
export class NewEmpComponent {
  emp:Employe =new Employe();
  constructor(private  service : ServiceEmpService, private router: Router) {
  }
  ajouterEmp(){
    this.service.AddEmp(this.emp).subscribe(
      (data) => {
        // Opérations à effectuer en cas de succès
        console.log('Données récupérées :', data);

      },
      (error) => {
        // Gestion des erreurs
        console.error('Erreur lors de la requête :', error);
      }
    );
    this.router.navigate(['/list']);


  }


}

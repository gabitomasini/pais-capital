import { Component, OnInit } from '@angular/core';
import { CidadesService } from '../services/cidades/cidades.service';
import { PaisesService } from '../services/paises/paises.service';


@Component({
  selector: 'app-exercicio-input',
  templateUrl: './exercicio-input.component.html',
  styleUrls: ['./exercicio-input.component.css']
})
export class ExercicioInputComponent implements OnInit {

  paises: any;
  cidades: any;
  paisEscolhido: any = {
    id: 0, name: ''
  }

  constructor(
    private paisesService: PaisesService,
    private cidadesService: CidadesService
    ) { }

  ngOnInit(): void {
    this.mostrarPaises();
    this.onSelect(this.paisEscolhido.id);
  }

  mostrarPaises(){
    this.paisesService.todosPaisesCidades().subscribe(
      (data:any)=>{
        this.paises = data;
        console.log(this.paises);
      }
    )
  }

  onSelect(pais_id: any){
    this.paisesService.todosPaisesCidades().subscribe((res:any)=>{
      this.cidades = res['cidades'].filter(
        (res:any)=> res.pais_id == pais_id!.value
      ),
      console.log(this.cidades);
    })

  }
}

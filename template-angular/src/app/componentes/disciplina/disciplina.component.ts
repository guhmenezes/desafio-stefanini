import { Component, OnInit } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  disciplina = new Disciplina() 
  disciplinaList: Disciplina[] = []

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.service.cadastrarDisciplina(this.disciplina).subscribe({
      next: disciplina => console.log('Saved with sucess', disciplina),
      error: err => console.log(err)
    })
  }

}

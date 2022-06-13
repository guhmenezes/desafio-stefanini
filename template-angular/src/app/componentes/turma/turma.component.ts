import { Component, OnInit } from '@angular/core';
import { Turma } from 'src/app/models/turma';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  turma = new Turma() 
  turmaList: Turma[] = []

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.service.cadastrarTurma(this.turma).subscribe({
      next: turma => console.log('Saved with sucess', turma),
      error: err => console.log(err)
    })
  }
}

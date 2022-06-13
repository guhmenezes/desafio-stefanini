import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno = new Aluno() 
  alunoList: Aluno[] = []

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.service.cadastrarAluno(this.aluno).subscribe({
      next: aluno => console.log('Saved with sucess', aluno),
      error: err => console.log(err)
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { ServicesService } from 'src/app/services.service';

@Component({
  templateUrl: './edit-aluno.component.html',
})

export class EditAlunoComponent implements OnInit {

    aluno = new Aluno();
    alunoList: Aluno[] = [];
    constructor(private activatedRoute: ActivatedRoute, private service: ServicesService) { }
  
    ngOnInit(): void {
        this.service.listarAluno((this.activatedRoute.snapshot.paramMap.get('matricula')!)).subscribe({
            next: aluno => console.log(aluno),
            error: err => console.log('Error', err)
          }
          );
    }

    save(){ 
  
    }

    excluir(){ 
  
    }
  
  }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  alunoList: Aluno[] = [];
  constructor(private activatedRoute: ActivatedRoute, private service: ServicesService) { }

  ngOnInit(): void {
    this.alunoList = this.service.listaAlunosLocal()
  }

  excluir(){ 

  }

}

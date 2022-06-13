import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso = new Curso()
  cursoList: Curso[] = [];

  constructor(private service: ServicesService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.service.cadastrarCurso(this.curso).subscribe({
      next: curso => console.log('Saved with sucess', curso),
      error: err => console.log(err)
    })
  }

}

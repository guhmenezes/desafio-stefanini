import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlunoComponent } from './componentes/aluno/aluno.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { DisciplinaComponent } from './componentes/disciplina/disciplina.component';
import { TurmaComponent } from './componentes/turma/turma.component';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { NgxMaskModule } from 'ngx-mask';
import { ListaCursosComponent } from './componentes/lista-cursos/lista-cursos.component';
import { ListaDisciplinasComponent } from './componentes/lista-disciplinas/lista-disciplinas.component';
import { ListaTurmasComponent } from './componentes/lista-turmas/lista-turmas.component'
import { EditAlunoComponent } from './componentes/lista-alunos/edit-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    CursoComponent,
    DisciplinaComponent,
    TurmaComponent,
    ListaAlunosComponent,
    NavbarComponent,
    ListaCursosComponent,
    ListaDisciplinasComponent,
    ListaTurmasComponent,
    EditAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
        dropSpecialCharacters: true,  
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

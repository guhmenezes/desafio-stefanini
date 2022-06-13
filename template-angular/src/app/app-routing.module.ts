import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './componentes/aluno/aluno.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { DisciplinaComponent } from './componentes/disciplina/disciplina.component';
import { EditAlunoComponent } from './componentes/lista-alunos/edit-aluno.component';
import { ListaAlunosComponent } from './componentes/lista-alunos/lista-alunos.component';
import { TurmaComponent } from './componentes/turma/turma.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'aluno',
    pathMatch: 'full',
  },
  {
    path:'aluno',
    component: AlunoComponent,
  },
  {
    path:'aluno/info/:matricula',
    component: EditAlunoComponent,
  },
  {
    path:'curso',
    component: CursoComponent,
  },
  {
    path:'disciplina',
    component: DisciplinaComponent,
  },
  {
    path:'turma',
    component: TurmaComponent,
  },
  {
    path:'lista-alunos',
    component: ListaAlunosComponent,
  },

  // {
  //   path: 'user/:id',
  //   component: UserFormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

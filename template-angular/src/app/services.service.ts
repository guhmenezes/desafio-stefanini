import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './models/curso';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aluno } from './models/aluno';
import { Turma } from './models/turma';
import { Disciplina } from './models/disciplina';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private cadastraCursoUrl = ''
  private cadastraAlunoUrl = ''
  private cadastraTurmaUrl = ''
  private cadastraDisciplinaUrl = ''
  private alunosUrl = ''

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  cadastrarCurso(curso: Curso): Observable<Curso> {
    return this.httpClient.post<Curso>(this.cadastraCursoUrl, curso, this.httpOptions)
  }

  cadastrarAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.post<Aluno>(this.cadastraAlunoUrl, aluno, this.httpOptions)
  }

  cadastrarTurma(turma: Turma): Observable<Turma> {
    return this.httpClient.post<Turma>(this.cadastraTurmaUrl, turma, this.httpOptions)
  }

  cadastrarDisciplina(disciplina: Disciplina): Observable<Turma> {
    return this.httpClient.post<Turma>(this.cadastraDisciplinaUrl, disciplina, this.httpOptions)
  }

  listaAlunos(): Observable<Aluno> {
    return this.httpClient.get<Aluno>(this.cadastraCursoUrl)
  }

  listaAlunosLocal(): Aluno[] {
    return ALUNOS
  }

  editarAlunos(id: string, aluno: Aluno):Observable<Aluno>{
    return this.httpClient.put<Aluno>(`${this.alunosUrl}/id/${id}`, aluno, this.httpOptions)
  }

  listarAluno(matricula: string) {
    return this.httpClient.get<Aluno>(`${this.alunosUrl}/${matricula}`);
  }

  excluirAluno(id: string):Observable<any>{
    return this.httpClient.delete<any>(`${this.alunosUrl}/id/${id}`)
  }
}

var ALUNOS = [{
  nome: 'TESTE DA SILVA',
  matricula: '123456',
  cpf: '12314578910',
  email: 'teste@teste.com',
  turma: 'B',
},
{
  nome: 'TESTE DA SILVA SAURO',
  matricula: '123457',
  cpf: '019.876.543-21',
  email: 'teste2@teste.com',
  turma: 'A',
},
]

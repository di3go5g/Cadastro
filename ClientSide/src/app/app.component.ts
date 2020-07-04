import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CadastroUsuarioesService } from './services/cadastro-usuarioes.service'
import { CadastroUsuarioes, Escolaridade } from './models/cadastro-usuarioes';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cadastro de Usuário';

  cadastroUsuario = {} as CadastroUsuarioes;
  usuariosCadastrados: CadastroUsuarioes[];

  constructor(private cadastroUsuarioesService: CadastroUsuarioesService){}

  ngOnInit(){
    this.getUsuarioCadastro();
    
  }

  saveUsuarioCadastro(form: NgForm){
    if(this.cadastroUsuario.Id !== undefined) {
      this.cadastroUsuarioesService.updateUsuarioCadastro(this.cadastroUsuario).subscribe(() => {
        this.cleanForm(form)
      });
    } 

    else {
      this.cadastroUsuarioesService.saveUsuarioCadastro(this.cadastroUsuario).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getUsuarioCadastro() {
    this.cadastroUsuarioesService.getUsuarioCadastro().subscribe((usuariosCadastrados: CadastroUsuarioes[]) => {
      let dadosFormatados = usuariosCadastrados.map(item => { 

        return {...item, 
          DataNascimento:moment(item.DataNascimento).format("DD/MM/YYYY"), 
          Escolaridade:this.converteEscolaridadeParaText(item.Escolaridade)}
      })

      this.usuariosCadastrados = dadosFormatados;
    });
  }


  converteEscolaridadeParaText(escolaridadeAluno): string {
        if(escolaridadeAluno == Escolaridade.Infantil){
          return String(escolaridadeAluno).replace("1", "Infantil")
        }
        else if(escolaridadeAluno == Escolaridade.Fundamental){
          return String(escolaridadeAluno).replace("2", "Fundamental")

        }
        else if(escolaridadeAluno == Escolaridade.Médio){
        return String(escolaridadeAluno).replace("3", "Médio")

        }
        else if(escolaridadeAluno == Escolaridade.Superior){
           return String(escolaridadeAluno).replace("4", "Superior")
        }
        else{
          return String("Não Informado")
        }
  }

  deleteUsuarioCadastro(cadastroUsuario: CadastroUsuarioes) {
    this.cadastroUsuarioesService.deleteUsuarioCadastro(cadastroUsuario).subscribe(() => {
      this.getUsuarioCadastro();
    });
  }

  editUsuarioCadastro(cadastroUsuario: CadastroUsuarioes) {
    this.cadastroUsuario = { ...cadastroUsuario };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsuarioCadastro();
    form.resetForm();
    this.cadastroUsuario = {} as CadastroUsuarioes;
  }

}

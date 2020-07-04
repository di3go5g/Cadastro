import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CadastroUsuarioesService } from './services/cadastro-usuarioes.service'
import { CadastroUsuarioes } from './models/cadastro-usuarioes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientSide';

  cadastroUsuario = {} as CadastroUsuarioes;
  usuariosCadastrados: CadastroUsuarioes[];

  constructor(private cadastroUsuarioesService: CadastroUsuarioesService){}

  ngOnInit(){
    this.cadastroUsuarioesService.getUsuarioCadastro();
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
      this.usuariosCadastrados = usuariosCadastrados;
    });
  }

  deleteCar(cadastroUsuario: CadastroUsuarioes) {
    this.cadastroUsuarioesService.deleteUsuarioCadastro(cadastroUsuario).subscribe(() => {
      this.getUsuarioCadastro();
    });
  }

  editCar(cadastroUsuario: CadastroUsuarioes) {
    this.cadastroUsuario = { ...cadastroUsuario };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsuarioCadastro();
    form.resetForm();
    this.cadastroUsuario = {} as CadastroUsuarioes;
  }

}

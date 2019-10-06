import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroService } from '../servicos/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
 
  public formCadastro: FormGroup;

  public registro;
 
  mensagens_validacao = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    profissao: [
      { tipo: 'required', mensagem: 'O campo Profissão é obrigatório.' },
    ]
  };


  public listaRegistro = [];

  constructor(public formBuilder: FormBuilder, private rota: Router,public reg: RegistroService) {
    this.formCadastro = formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    password: ['', Validators.compose([Validators.required])],
  }); }

  public save() {
    // Cria um objeto com os dados do formulário
    let registro = {
      email: this.formCadastro.value.email,
      password: this.formCadastro.value.password
    }
    // Envia os dados a Api e salva o resultado no user
    this.reg.SaveRegistro(registro).subscribe(data => {
      console.log(data);
      this.registro = data;

        // Exibir a data em PT-BR
        
       
    });

  }
 
  ngOnInit() {
  }

  public exibirForm() {
    console.log(this.formCadastro);
  };

}

import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../servicos/users.service';
// Importção para trabalhar com datas.
import * as moment from 'moment';
let CadastroPage = class CadastroPage {
    constructor(formBuilder, rota, us) {
        this.formBuilder = formBuilder;
        this.rota = rota;
        this.us = us;
        this.mensagens_validacao = {
            nome: [
                { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
                { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
            ],
            profissao: [
                { tipo: 'required', mensagem: 'O campo Profissão é obrigatório.' },
            ]
        };
        this.formCadastro = formBuilder.group({
            nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            profissao: ['', Validators.compose([Validators.required])],
        });
    }
    save() {
        // Cria um objeto com os dados do formulário
        let user = {
            name: this.formCadastro.value.nome,
            job: this.formCadastro.value.profissao
        };
        // Envia os dados a Api e salva o resultado no user
        this.us.SaveUser(user).subscribe(data => {
            console.log(data);
            this.user = data;
            // Exibir a data em PT-BR
            this.user.dataPTBR = moment(this.user.createdAt).format('DD/MM/YYYY 	HH:mm:ss');
        });
    }
    ngOnInit() {
    }
    exibirForm() {
        console.log(this.formCadastro);
    }
    ;
};
CadastroPage = tslib_1.__decorate([
    Component({
        selector: 'app-cadastro',
        templateUrl: './cadastro.page.html',
        styleUrls: ['./cadastro.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, Router, UsersService])
], CadastroPage);
export { CadastroPage };
//# sourceMappingURL=cadastro.page.js.map
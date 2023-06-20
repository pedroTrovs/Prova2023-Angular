import { EmpresaService } from './../empresa.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Empresa } from '../empresa';

@Component({
  selector: 'app-controle-empresa',
  templateUrl: './controle-empresa.component.html',
  styleUrls: ['./controle-empresa.component.css']
})
export class ControleEmpresaComponent {
  formGroupEmpresa : FormGroup;
  lista: Empresa[] = [];
  constructor (private service: EmpresaService, formBuilder: FormBuilder){
    this.formGroupEmpresa = formBuilder.group({
      id : [''],
      nome : [''],
      endereco : [''],
      tel : [''],
      email : ['']
    });
  }

  ngOnInit(): void {
    this.loadList();
  }

  save()
  {
    this.service.addEmpresa(this.formGroupEmpresa.value).subscribe({
      next: () => {
        this.loadList();
        this.formGroupEmpresa.reset();
      }
    });
  }

  loadList(){
    this.service.getEmpresas().subscribe(
      {
          next:  data =>  this.lista = data,
          error: msg  => console.log("Erro ao chamar o endpoint " + msg)
      }
    )
  }

  remove(target : Empresa)
  {
    this.service.removeEmpresa(target).subscribe({
      next: () => {
        alert("Empresa removida com sucesso!");
        this.loadList();
      }
    });
  }
}

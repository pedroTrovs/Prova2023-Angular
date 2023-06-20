import { EmpresaService } from './../empresa.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-controle-empresa',
  templateUrl: './controle-empresa.component.html',
  styleUrls: ['./controle-empresa.component.css']
})
export class ControleEmpresaComponent {
  formGroupEmpresa : FormGroup;

  constructor (private service: EmpresaService, formBuilder: FormBuilder){
    this.formGroupEmpresa = formBuilder.group({
      id : [''],
      nome : [''],
      endereco : [''],
      tel : [''],
      email : ['']
    });
  }

  save()
  {
    this.service.addEmpresa(this.formGroupEmpresa.value).subscribe({
      next: () => {
        this.formGroupEmpresa.reset();
      }
    });
  }
}

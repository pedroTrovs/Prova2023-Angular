import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleEmpresaComponent } from './controle-empresa.component';

describe('ControleEmpresaComponent', () => {
  let component: ControleEmpresaComponent;
  let fixture: ComponentFixture<ControleEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

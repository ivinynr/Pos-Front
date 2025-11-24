import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContaService } from '../../../../shared/services/conta/conta-service';
import { Conta } from '../../../../shared/models/conta';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './deposito.html',
  styleUrls: ['./deposito.scss']
})
export class Deposito implements OnInit {
  formGroup!: FormGroup;
  contas: Conta[] = [];

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private snackBar: MatSnackBar
    , private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      valor: ['', [Validators.required, Validators.min(1)]],
      conta: ['', Validators.required]
    });

    this.listarContas();
  }

  listarContas() {
    this.contaService.listar().subscribe({
      next: (res) => (this.contas = res),
      error: () => this.snackBar.open('Erro ao carregar contas', 'Fechar', { duration: 3000 })
    });
  }

  depositar() {
    if (this.formGroup.valid) {
      const deposito = {
        conta: this.formGroup.value.conta,
        valor: this.formGroup.value.valor
      };

      this.contaService.deposito(deposito).subscribe({
         next: () => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Sucesso',
                    text: 'Saque registrado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  this.router.navigate(['/deposito']);
                },
        error: () => {
          this.snackBar.open('Erro ao realizar depósito', 'Fechar', { duration: 3000 });
        }
      });
    }
  }
}

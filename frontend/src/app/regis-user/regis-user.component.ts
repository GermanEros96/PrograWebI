import { Component } from '@angular/core';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';  // <-- Import SweetAlert2

@Component({
  selector: 'app-regis-user',
  standalone: true,
  imports: [RouterLink, RouterModule, FormsModule, CommonModule],
  templateUrl: './regis-user.component.html',
  styleUrls: ['./regis-user.component.css']
})
export class RegisUserComponent {
  userName = '';
  password = '';
  rePassword = '';
  login = '';
  namecomplete = '';
  loading = false;

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(form: any) {
    if (this.password !== this.rePassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Las contraseñas no coinciden',
      });
      return;
    }

    if (form.invalid) return;

    this.loading = true;

    const userData = {
      userName: this.userName,
      password: this.password,
      login: this.login,
      namecomplete: this.namecomplete,
    };

    this.http.post('http://localhost:8012/miproyecto/api/index.php?comando=usuarios', userData)
      .subscribe({
        next: (response) => {
          Swal.fire({
            icon: 'success',
            title: '¡Registro exitoso!',
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            this.loading = false;
            form.resetForm();
            this.router.navigate(['/loginscreen']);  // redirigir al login después de cerrar el popup
          }, 1500);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al registrar usuario',
          });
          setTimeout(() => {
            this.loading = false;
            form.resetForm();
          }, 1000);
          console.error(err);
          console.log('El Usuario Existe o no es valido');
        }
      });
  }
}

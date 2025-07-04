import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { environment } from '../../environments/environment';
import { AuthService } from '../auth.service';
import { RegisUserComponent } from '../regis-user/regis-user.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule, RegisUserComponent], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public environmentData: any = null;
  public apiSysinfo: any = null;

  email: string = '';
  clave: string = '';
  errorMsg: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    this.environmentData = environment;
    this.http.get(environment.apiurl + 'sysinfo').subscribe(
      (response: any) => {
        this.apiSysinfo = response;
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    this.errorMsg = '';
    this.authService.login({ email: this.email, clave: this.clave }).subscribe({
      next: () => {
        this.router.navigate(['/']);
        console.log('Login Exitoso')
      },
      error: (err) => {
        this.errorMsg = 'Usuario o contraseña incorrectos';
        console.error('Error login', err);
        console.log('Error de credenciales')
      },
    });
  }
}

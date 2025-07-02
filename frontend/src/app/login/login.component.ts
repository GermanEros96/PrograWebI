import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public environmentData: any = null;
  public apiSysinfo: any = null;
  
  constructor(private http: HttpClient)
  {
    this.environmentData =environment;
    this.http.get(environment.apiurl + 'sysinfo')
      .subscribe(
        (response: any) => {
          this.apiSysinfo = response;
        },
        (error) => {
          console.error(error);
        }
      );
}
}

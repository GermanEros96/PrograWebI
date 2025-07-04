import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisUserComponent } from './regis-user/regis-user.component';

export const routes: Routes = [
    {   path: 'loginscreen', component: LoginComponent },
    {   path : 'registrarte', component : RegisUserComponent}
];

/* Aca registramos las rutas. NO se usa "Href:..", las declaramos globales aca para
poder usarlas Globalmente (En TODA la API) */
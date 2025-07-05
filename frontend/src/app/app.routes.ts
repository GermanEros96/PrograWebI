import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisUserComponent } from './regis-user/regis-user.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {   path: '', component: LoginComponent }, // <-- Importante 
    {   path: 'loginscreen', component: LoginComponent },
    {   path : 'registrarte', component : RegisUserComponent},
    {   path : 'footercomp', component : FooterComponent},
];

/* Aca registramos las rutas. NO se usa "Href:..", las declaramos globales aca para
poder usarlas Globalmente (En TODA la API) */
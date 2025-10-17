import { Routes } from '@angular/router';
import { aporb } from './formularios/aporb/aporb.model';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import OperacionesDistancia from './formularios/distancia/operacionesdistancia';
import { multiplicacionComponent } from './formularios/multiplicacion/multiplicacion.component';
import { OperacionesZodiaco } from './formularios/zodiaco/operacioneszodiaco';

export const routes: Routes = [{
    path: 'auth',
    children: [
        {
            path: "sign-in",
            loadComponent:() => import('./auth/features/sign-in/sign-in.component').then( (c)=> c.SignInComponent),
        },
        {
            path: "sign-up",
            loadComponent:() => import('./auth/features/sign-up/sign-up.component').then( (c)=> c.SignUpComponent),
        },
    ],
},
{
    path: 'utl',
    children:[
        {
            path: 'listaalumnos',
            loadComponent: () =>
                import('./utl/alumnos/alumnos.component').then((c) => c.AlumnosComponent),
        },
        {
            path: 'agregar',
            loadComponent: () =>
                import('./utl/agregar/agregar.component').then((c) => c.AgregarComponent),
        },
        {
            path: 'eliminar/:matricula',
            loadComponent: () =>
                import('./utl/eliminar/eliminar.component').then((c) => c.EliminarComponent),
        },
        {
            path: 'editar/:matricula',
            loadComponent: () =>
                import('./utl/editar/editar.component').then((c) => c.EditarComponent),
        },
    ],
},
{
    path: 'aporb',
    children:[
        {
            path: 'multiplicación',
            loadComponent: () =>
                import('./formularios/aporb/aporb.component').then((c) => c.AporbComponent),
        },
    ],
},


{
    path: 'distancia',
    children:[
        {
            path: 'calculodistancia',
            loadComponent: () =>
                import('./formularios/distancia/distancia.component').then((c) => c.DistanciaComponent),
        },
    ],
},

{
    path: 'zodiaco',
    children:[
        {
            path: 'OperacionesZodiaco',
            loadComponent: () =>
                import('./formularios/zodiaco/zodiaco.component').then((c) => c.ZodiacoComponent),
        },
    ],
},

{


            path: 'multiplicaciones',
            loadComponent: () =>
                import('./formularios/multiplicacion/multiplicacion.component').then((c) => c.multiplicacionComponent),


},





    {path:'', redirectTo: 'admin', pathMatch: 'full'},
    {path:'**', redirectTo:'admin'},

];

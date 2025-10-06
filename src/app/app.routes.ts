import { Routes } from '@angular/router'; // componente de angular


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // el path debe estar completa para redirigir
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage)
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./details/details.page').then((m) => m.DetailsPage)
  },
  {
    path: 'info',
    loadComponent: () =>
      import('./info/info.page').then((m) => m.InfoPage)
  }
];
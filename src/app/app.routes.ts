import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./components/parent/parent.component').then(
        (m) => m.ParentComponent
      ),
  },
];

import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.component').then((component) => component.AppComponent),
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./components/parent/parent.component').then(
        (component) => component.ParentComponent
      ),
  },
  {
    // изолированный лениво-загружаемый маршрут
    // обратить внимание, что здесь импортируется файл маршрута, а не файл компонента
    // и используется loadChildren вместо loadComponent
    path: 'child',
    loadChildren: () =>
      import('./components/child/child.routes').then(
        (route) => route.CHILD_ROUTES
      ),
  },
];

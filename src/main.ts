import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Чтобы в полной мере воспользоваться преимуществами автономных компонентов, рекомендуется загружать приложение с использованием автономных API вместо NgModules
// В bootstrapApplicationAPI нам просто нужно передать автономный компонент, который мы хотим превратить в корень приложения.
bootstrapApplication(AppComponent, appConfig).catch((err: Error) =>
  console.error(err)
);

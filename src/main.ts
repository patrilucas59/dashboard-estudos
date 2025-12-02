import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LucideAngularModule, Home, Goal, BookOpen, BarChart3 } from 'lucide-angular';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    {
      provide: LucideAngularModule,
      useValue: LucideAngularModule.pick({
        Home,
        Goal,
        BookOpen,
        BarChart3
      })
    }
  ]
});

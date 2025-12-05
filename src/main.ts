import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { Goal, BookOpen, File, House, LucideAngularModule, EllipsisVertical, Clock } from 'lucide-angular';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(App, {
   providers: [
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        House,
        Goal,
        BookOpen,
        File,
        EllipsisVertical,
        Clock
      })
    )
  ]
});
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideToastr } from 'ngx-toastr';
import { LucideAngularModule, House, Goal, BookOpen, File, EllipsisVertical, Clock, TrendingUp, 
  Settings, CircleUser, Calendar, Medal, Search, Filter, CheckCircle2, PlayCircle, Circle, Target, 
  Camera, Mail, Phone, MapPin, HandCoins, Rocket, ClipboardMinus, Crown, Activity, Pencil } from 'lucide-angular';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),

    provideAnimations(),
    provideToastr({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
          closeButton: true,
        }),

    importProvidersFrom(
      LucideAngularModule.pick({
        House,
        Goal,
        BookOpen,
        File,
        EllipsisVertical,
        Clock,
        TrendingUp,
        Settings,
        CircleUser,
        Calendar,
        Medal,
        Search,
        Filter,
        CheckCircle2,
        PlayCircle,
        Circle,
        Target,
        Camera,
        Mail,
        Phone,
        HandCoins,
        Rocket,
        ClipboardMinus,
        Crown,
        Activity,
        MapPin,
        Pencil
      })
    )
  ]
});
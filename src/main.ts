import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { Goal, BookOpen, File, House, LucideAngularModule, EllipsisVertical, Clock, TrendingUp, 
  Settings, CircleUser, Calendar, Medal, Search, Filter, CheckCircle2, PlayCircle, Circle, Target, 
  Camera, Mail, Phone, MapPin, HandCoins, Rocket, ClipboardMinus, Crown, Activity, 
  Pencil} from 'lucide-angular';
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
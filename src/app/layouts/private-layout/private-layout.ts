import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, Navbar, Header],
  template: `
    <div class="flex h-screen">

      <app-navbar></app-navbar>

      <div class="flex-1 flex flex-col">
        <app-header
          class="fixed top-0 right-0 left-0 lg:left-62 h-16 z-30"
        ></app-header>

        <main
          class="overflow-auto bg-gray-50 mt-16 h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-0"
        >
          <router-outlet></router-outlet>
        </main>
      </div>

    </div>
  `,
})
export class PrivateLayout {}
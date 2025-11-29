import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [Hello],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello implements OnInit {

  @Input() name: string = 'Estudos';

  constructor() {  }

  ngOnInit(): void {
  }
}

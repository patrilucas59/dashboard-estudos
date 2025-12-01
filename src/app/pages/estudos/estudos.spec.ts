import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estudos } from './estudos';

describe('Estudos', () => {
  let component: Estudos;
  let fixture: ComponentFixture<Estudos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estudos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estudos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { EjemploService } from './ejemplo.service';

describe('EjemploService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EjemploService]
    });
  });

  it('should be created', inject([EjemploService], (service: EjemploService) => {
    expect(service).toBeTruthy();
  }));
});

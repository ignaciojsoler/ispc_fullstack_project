import { TestBed } from '@angular/core/testing';

import { IniciaSesionService } from './inicia-sesion.service';

describe('IniciaSesionService', () => {
  let service: IniciaSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IniciaSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

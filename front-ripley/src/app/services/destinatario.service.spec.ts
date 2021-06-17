import { TestBed } from '@angular/core/testing';

import { DestinatarioService } from './destinatario.service';

describe('DestinatarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestinatarioService = TestBed.get(DestinatarioService);
    expect(service).toBeTruthy();
  });
});

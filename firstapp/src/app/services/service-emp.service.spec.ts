import { TestBed } from '@angular/core/testing';

import { ServiceEmpService } from './service-emp.service';

describe('ServiceEmpService', () => {
  let service: ServiceEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

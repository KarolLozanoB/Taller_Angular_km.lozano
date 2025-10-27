import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SerieService } from './serie.service';

describe('SerieService', () => {
  let service: SerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SerieService]
    });
    service = TestBed.inject(SerieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

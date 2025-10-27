import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SerieListComponent } from './serie-list.component';
import { SerieService } from '../serie.service';

describe('SerieListComponent', () => {
  let component: SerieListComponent;
  let fixture: ComponentFixture<SerieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerieListComponent],
      imports: [HttpClientTestingModule],
      providers: [SerieService],
    }).compileComponents();

    fixture = TestBed.createComponent(SerieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

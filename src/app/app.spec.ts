import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { SerieListComponent } from './serie/serie-list/serie-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { SerieService } from './serie/serie.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App, SerieListComponent],
      imports: [HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      providers: [SerieService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

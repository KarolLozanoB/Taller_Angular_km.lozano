import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../Serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
  standalone: false,
})
export class SerieListComponent implements OnInit {

  series: Array< Serie> = [];
  s !: Serie;

  constructor( private serieService:SerieService) { }


  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit() {
    this.getSeries();
  }

  averageSeasons(): string {

    const captionTable = document.getElementById("caption-table") as HTMLTableCaptionElement;

    var sumSeasons = 0;
    var totalSeasons = 0;
    var avgSeasons = 0;

    this.series.forEach((s) => {
        sumSeasons += s.seasons;
        totalSeasons++;
    });
    
    avgSeasons = sumSeasons / totalSeasons;

    return captionTable.innerHTML = `Seasons average:  ${avgSeasons}`;
}


showSerie(serie: Serie){
  this.s=serie;
}

}

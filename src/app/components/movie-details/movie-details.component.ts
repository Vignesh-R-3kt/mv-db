import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetailsResult: any;
  movieVideoResult: any;
  movieCastResult: any;

  constructor(private http: ApiServicesService, private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    const movieId = this.router.snapshot.paramMap.get("id");
    this.getMovie(movieId);
    this.getVideo(movieId);
    this.getMovieCast(movieId);
  }

  getMovie(id: any) {
    this.http.getMovieDetails(id).subscribe((res: any) => {
      this.movieDetailsResult = res;
    })
  }

  getVideo(id: any) {
    this.http.getMovieVideo(id).subscribe((res: any) => {
      res.results.forEach((ele: any) => {
        if (ele.type === 'Trailer') {
          this.movieVideoResult = ele.key;
        }
      })
    })
  }

  getMovieCast(id: any) {
    this.http.getMovieCast(id).subscribe((res: any) => {
      this.movieCastResult = res.cast;
    })
  }

}

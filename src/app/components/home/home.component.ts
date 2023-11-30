import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerResults: any[] = [];
  trendingResults: any[] = [];

  constructor(private api: ApiServicesService) { }

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData(): void {
    this.api.bannerApiData().subscribe((res: any) => {
      this.bannerResults = res.results;
    })
  }


  trendingData(): void {
    this.api.trendingMovieApiData().subscribe((res: any) => {
      this.trendingResults = res.results;
      console.log(res);
    })
  }

}

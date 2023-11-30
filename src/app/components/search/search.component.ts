import { Component } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchForm: any;
  searchResult: any[] = [];

  constructor(private fb: FormBuilder, private http: ApiServicesService) {
    this.searchForm = fb.group({
      movieName: ""
    })
  }

  submitForm() {
    const inputValue = this.searchForm.value.movieName.trim();

    if (inputValue) {
      this.http.getSearchMovie(inputValue).subscribe((res: any) => {
        this.searchResult = res.results;
      })
    }
  }
}

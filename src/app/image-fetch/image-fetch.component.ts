import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-fetch',
  templateUrl: './image-fetch.component.html',
  styleUrls: ['./image-fetch.component.css']
})
export class ImageFetchComponent implements OnInit {

  searchTerm: string;
  loading = false;
  images: any[];

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(){
    this.loading = true;

    this.loading = false;
  }

}

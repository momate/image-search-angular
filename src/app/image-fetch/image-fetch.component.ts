import { ImageService } from './../core/image.service';
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

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.loading = true;
    this.images = [];
    this.imageService.search(this.searchTerm).subscribe((result: any) => {
      this.images= result['results'];
      this.loading = false;
    });
  }

}

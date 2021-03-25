import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../service/photo-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {


  photos:any[] = []; 
  constructor(private servPhotos:PhotoServiceService) { }

  ngOnInit(): void {
    this.servPhotos.getPhotosBySection("books")
    .subscribe(data =>{
      console.log(data)
      this.photos = data;
    } )
  }

}

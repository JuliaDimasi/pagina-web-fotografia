import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  constructor(private http:HttpClient) { }

  getPhotosBySection(section:string){
    let photos;
    photos = this.http.get("http://localhost:8081/api/photo");
    return photos;
  }
}


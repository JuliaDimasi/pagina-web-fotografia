import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BooksComponent } from './books/books.component';
import { ProductionsComponent } from './productions/productions.component';
import { VenturesComponent } from './ventures/ventures.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"gallery",
    component: GalleryComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"reservation",
    component: ReservationComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"books",
    component: BooksComponent
  },
  {
    path:"productions",
    component: ProductionsComponent
  },
  {
    path:"ventures",
    component: VenturesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { BooksComponent } from './books/books.component';
import { ProductionsComponent } from './productions/productions.component';
import { VenturesComponent } from './ventures/ventures.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ReservationComponent,
    ContactComponent,
    BooksComponent,
    ProductionsComponent,
    VenturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

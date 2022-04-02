import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SocialsHeaderComponent } from './components/socials-header/socials-header.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialsHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // FortAwesome library implementation, as per their Git info.
    library.addIcons(faCoffee)
    library.addIcons(faGithubSquare)
    library.addIcons(faTwitter)
    library.addIcons(faInstagram)

  }
 }

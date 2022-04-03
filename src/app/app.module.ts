import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SocialsHeaderComponent } from './components/socials-header/socials-header.component';
import { faCoffee, faEnvelope, faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarButtonComponent } from './components/sidebar-button/sidebar-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SocialsHeaderComponent,
    SidebarComponent,
    SidebarButtonComponent,
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
    library.addIcons(faHome)
    library.addIcons(faEnvelope)
    library.addIcons(faQuestionCircle)

  }
 }

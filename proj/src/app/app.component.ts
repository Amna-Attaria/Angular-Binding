import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { MycompComponent } from './mycomp/mycomp.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavComponent,SliderComponent,ContactComponent, FooterComponent, AboutUsComponent,MycompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proj';
}

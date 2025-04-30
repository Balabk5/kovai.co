import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ButtonComponent } from "../../components/button/button.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardV1Component } from "../../components/card-v1/card-v1.component";
import { CardV2Component } from "../../components/card-v2/card-v2.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, FooterComponent, CardV1Component, CardV2Component],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}

import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-card-v1',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card-v1.component.html',
  styleUrl: './card-v1.component.scss'
})
export class CardV1Component {

}

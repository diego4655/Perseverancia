import { Component } from '@angular/core';
import { NgbNavConfig, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  standalone: true,
  selector: 'app-nav-regular',
  templateUrl: './nav-regular.component.html',
  styleUrls: ['./nav-regular.component.scss'],
  imports: [NgbNavModule],
  providers: [NgbNavConfig]
})
export class NavRegularComponent {
  active = 1;
}

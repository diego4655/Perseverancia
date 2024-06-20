import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavRegularComponent } from './nav-regular/nav-regular.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, NavRegularComponent],
})
export class AppComponent {
  title = 'Perseverancia';
}

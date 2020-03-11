import {
  Component,
  Input
} from '@angular/core';

import { Event } from './event/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input () shedule: Event[];
}

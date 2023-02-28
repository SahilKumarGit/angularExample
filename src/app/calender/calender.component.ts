import { Component } from '@angular/core';
import { MonthService, ResizeService, DragAndDropService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  providers: [MonthService, ResizeService, DragAndDropService],
})
export class CalenderComponent {

}

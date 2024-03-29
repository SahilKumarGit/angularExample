import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { CalenderTwoComponent } from './calender-two/calender-two.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { EventActionsTemplateComponent } from './event-actions-template/event-actions-template.component';
import { environment } from '../environments/environment';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { FCMComponent } from './fcm/fcm.component';
import { NotificationService } from './service/notification/notification.service';
import { AsyncPipe } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CommonTableComponent } from './table/common-table/common-table.component';
import { CommonTableEachTDComponent } from './table/common-table-each-td/common-table-each-td.component';
import { SelectButtonComponent } from './table/select-button/select-button.component';
import { SwitchButtonComponent } from './table/switch-button/switch-button.component';
import { DAndDComponent } from './dragAndDrop/dand-d/dand-d.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    CalenderTwoComponent,
    EventActionsTemplateComponent,
    FCMComponent,
    CommonTableComponent,
    CommonTableEachTDComponent,
    SelectButtonComponent,
    SwitchButtonComponent,
    DAndDComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScheduleModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('combined-sw.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    DragDropModule
  ],
  providers: [NotificationService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

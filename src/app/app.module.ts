import { NgModule } from '@angular/core';
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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    CalenderTwoComponent,
    EventActionsTemplateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScheduleModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideMessaging(() => getMessaging())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

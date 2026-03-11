import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { WorkExperiencie } from './work-experiencie/work-experiencie';
import { Education } from './education/education';
import { Languages } from './languages/languages';
import { Skills } from './skills/skills';
import { Certificates } from './certificates/certificates';
import { Interest } from './interest/interest';

@NgModule({
  declarations: [
    App,
    Header,
    WorkExperiencie,
    Education,
    Languages,
    Skills,
    Certificates,
    Interest
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { HeaderComponent } from './header/header.component';
import { TimesPipe } from './times.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    GameInfoComponent,
    HeaderComponent,
    TimesPipe,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

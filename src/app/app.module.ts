import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { movieReducer } from './movies/reducers.movies';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movies/movie.effects';
import { MovieSelectedComponent } from './movies/movie-selected/movie-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieSelectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({movies:movieReducer}),
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

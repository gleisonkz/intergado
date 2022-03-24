import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HotToastModule } from '@ngneat/hot-toast';

import { SERVICE_TOKEN, tokenServiceFactory } from '@gd/classes';
import {
    AddButtonComponent, AnimalDialogComponent, GenericTableComponent, HeaderComponent
} from '@gd/components';
import { ShowValidationDirective } from '@gd/directives';
import { HomePage } from '@gd/pages';
import { AnimalService, AnimalStorageService } from '@gd/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    GenericTableComponent,
    HomePage,
    AddButtonComponent,
    AnimalDialogComponent,
    ShowValidationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
    MatDialogModule,
    HotToastModule.forRoot(),
  ],
  providers: [
    {
      provide: SERVICE_TOKEN,
      useFactory: tokenServiceFactory,
      deps: [AnimalStorageService, AnimalService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

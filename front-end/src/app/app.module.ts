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
import { HomePage } from 'src/app/pages/home/home.page';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { HeaderComponent } from './components/header/header.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AnimalDialogComponent } from './components/animal-dialog/animal-dialog.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { ShowValidationDirective } from './directives/show-validation.directive';

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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

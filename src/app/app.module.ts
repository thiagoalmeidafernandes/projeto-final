import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormComponent } from './form/form.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { CardComponent } from './card/card.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TabsComponent,
    FormComponent,
    CardComponent,
    DatapickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSliderModule,
    MatCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

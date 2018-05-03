import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatTabsModule, MatCommonModule, MatSelectModule, MatCardModule, MatSliderModule, MatPaginatorModule} from '@angular/material';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatTabsModule,
    MatCommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatPaginatorModule

    
    ],
  exports: [
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      BrowserModule,
      BrowserAnimationsModule,
      MatProgressSpinnerModule,
      MatStepperModule,
      MatTabsModule,
      MatCommonModule,
      MatInputModule,
      MatCheckboxModule,
      MatSelectModule,
      MatCardModule,
      MatSliderModule,
      MatPaginatorModule
    ],
})
export class Material { }
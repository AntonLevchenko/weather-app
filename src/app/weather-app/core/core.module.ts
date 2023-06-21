import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseHttpService } from './services/base-http.service';
import { WrapperModule } from './modules/wrapper/wrapper.module';

@NgModule({
  declarations: [],
  providers: [
    BaseHttpService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WrapperModule
  ],
  exports: [
    WrapperModule
  ]
})
export class CoreModule { }

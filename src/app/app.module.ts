import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DownpayCalculatorComponent } from "src/app/feature/downpay-calculator/downpay-calculator.component";
import { DownPayFormComponent } from "src/app/feature/downpay-calculator/down-pay-form/down-pay-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DollarformatPipe } from "./feature/pipes/dollarformat.pipe";
import { PercentformatPipe } from "./feature/pipes/percentformat.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DownpayCalculatorComponent,
    DownPayFormComponent,
    DollarformatPipe,
    PercentformatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DollarformatPipe],
  bootstrap: [AppComponent],
  exports: [DollarformatPipe]
})
export class AppModule {}

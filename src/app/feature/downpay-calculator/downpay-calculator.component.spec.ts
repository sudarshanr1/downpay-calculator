import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

import { DownpayCalculatorComponent } from "./downpay-calculator.component";
import { MatListModule } from "@angular/material/list";
import { DollarformatPipe } from "../pipes/dollarformat.pipe";
import { PercentformatPipe } from "../pipes/percentformat.pipe";

describe("DownpayCalculatorComponent", () => {
  let component: DownpayCalculatorComponent;
  let fixture: ComponentFixture<DownpayCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DownpayCalculatorComponent,
        DollarformatPipe,
        PercentformatPipe
      ],
      imports: [MatListModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownpayCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

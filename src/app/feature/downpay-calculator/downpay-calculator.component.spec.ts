import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { DownpayCalculatorComponent } from "./downpay-calculator.component";
import { MatListModule } from "@angular/material/list";

describe("DownpayCalculatorComponent", () => {
  let component: DownpayCalculatorComponent;
  let fixture: ComponentFixture<DownpayCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DownpayCalculatorComponent],
      imports: [MatListModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

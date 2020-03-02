import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { Payment } from "src/app/model/payment";
import { DownpayService } from "src/app/service/downpay.service";

@Component({
  selector: "app-down-pay-form",
  templateUrl: "./down-pay-form.component.html",
  styleUrls: ["./down-pay-form.component.scss"]
})
export class DownPayFormComponent implements OnInit {
  @Output() monthlyPayment: EventEmitter<number> = new EventEmitter();
  public formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private downPayService: DownpayService
  ) {}
  public months: Array<number>;
  public years: Array<number>;
  private content: Payment;

  ngOnInit() {
    this.formGroup = this.fb.group({
      interest: ["", [Validators.required, this.validatePercent]],
      year: ["", Validators.required],
      principal: ["", [Validators.required, this.validateAmount]],
      month: [],
      amountPerMonth: ["", this.validateAmount]
    });
    this.formGroup.get("interest").setValue(new Payment().interest);
    this.months = this.downPayService.getSavingMonths();
    this.years = this.downPayService.getPayPeriod();
    this.formGroup.valueChanges.subscribe(() => {
      if (this.formGroup.valid) {
        this.content = Object.assign({}, this.formGroup.value);
        this.monthlyPayment.emit(
          this.downPayService.getMonthlyPayment(this.content)
        );
      }
    });
  }

  validateAmount(c: AbstractControl) {
    if (!c.value) {
      return null;
    }
    let value = Number(
      c.value
        .toString()
        .split("")
        .splice(1)
        .join("")
    );
    let isValidDecimal = true;
    let decimalSplit = value.toString().split(".");
    if (
      decimalSplit.length > 2 ||
      (decimalSplit[1] && decimalSplit[1].length > 2)
    ) {
      isValidDecimal = false;
    }
    return isValidDecimal && value > 0 ? null : { validateAmount: true };
  }
  validatePercent(c: AbstractControl) {
    if (!c.value) {
      return null;
    }
    let value = Number(
      c.value
        .toString()
        .split("%")
        .join("")
    );
    let isValidDecimal = true;
    let decimalSplit = value.toString().split(".");
    if (
      decimalSplit.length > 2 ||
      (decimalSplit[1] && decimalSplit[1].length > 2)
    ) {
      isValidDecimal = false;
    }
    return isValidDecimal && value > 0 ? null : { validatePercent: true };
  }
}

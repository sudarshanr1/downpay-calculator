import {
  Component,
  OnInit,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
      interest: [],
      year: ["", Validators.required],
      principal: ["", Validators.required],
      month: [],
      amountPerMonth: []
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

  calculate() {
    console.log(this.formGroup);
  }
}

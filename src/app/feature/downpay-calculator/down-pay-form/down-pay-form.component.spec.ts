import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DownPayFormComponent } from "./down-pay-form.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DollarformatPipe } from "../../pipes/dollarformat.pipe";
import { PercentformatPipe } from "../../pipes/percentformat.pipe";

describe("DownPayFormComponent", () => {
  let component: DownPayFormComponent;
  let fixture: ComponentFixture<DownPayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DownPayFormComponent, DollarformatPipe, PercentformatPipe],
      imports: [
        ReactiveFormsModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownPayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

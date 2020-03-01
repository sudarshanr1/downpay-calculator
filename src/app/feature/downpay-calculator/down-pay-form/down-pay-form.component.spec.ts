import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DownPayFormComponent } from "./down-pay-form.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("DownPayFormComponent", () => {
  let component: DownPayFormComponent;
  let fixture: ComponentFixture<DownPayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DownPayFormComponent],
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

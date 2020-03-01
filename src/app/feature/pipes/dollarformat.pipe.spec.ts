import { DollarformatPipe } from "../pipes/dollarformat.pipe";

describe("DollarformatPipe", () => {
  it("create an instance", () => {
    const pipe = new DollarformatPipe();
    expect(pipe).toBeTruthy();
  });
});

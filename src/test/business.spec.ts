import sinon from "ts-sinon";
import { Service } from "./service";

describe("handler tests : ", () => {
  beforeEach(() => {
    sinon.stub(Service, "doSomething").resolves("asik");
  });
  it("should succeed", async () => {
    console.log(await Service.doSomething({}, {}));
  });
});

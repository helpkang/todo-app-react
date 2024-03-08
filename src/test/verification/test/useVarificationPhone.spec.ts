import {
  act,
  waitFor,
  renderHook,
  RenderHookResult,
} from "@testing-library/react";
import { Dispatch, SetStateAction, StrictMode } from "react";
import { useVarificationPhone } from "../useVarificationPhone";
import { initMock } from "./initMock";

describe("useVarificationPhone tests : ", () => {
  let hooks: RenderHookResult<
    {
      phone: string;
      setPhone: (phone: string) => void;
      isPhoneValid: boolean;
      count: number;
      increment: () => void;
    },
    undefined
  >;

  beforeAll(() => {
    initMock();
  });

  beforeEach(() => {
    hooks = renderHook(() => useVarificationPhone());
  });

  it("phone number digit 10 success", () => {
    act(() => {
      hooks.result.current.setPhone("1234567890");
    });
    expect(hooks.result.current.isPhoneValid).toBeTruthy();
    expect(hooks.result.current.count).toBe(1);
    act(() => {
      hooks.result.current.setPhone("1234567890a");
    });
    expect(hooks.result.current.isPhoneValid).not.toBeTruthy();
    expect(hooks.result.current.count).toBe(2);
  });

  it("phone number digit 11 success", () => {
    act(() => {
      hooks.result.current.setPhone("12345678901");
    });
    expect(hooks.result.current.phone).toBe("12345678901");
    expect(hooks.result.current.isPhoneValid).not.toBeTruthy();
  });

  it("phone number digit 9 fail", () => {
    act(() => {
      hooks.result.current.setPhone("123456789");
    });
    expect(hooks.result.current.isPhoneValid).toBeTruthy();
  });
  it("phone albhabet fail", () => {
    act(() => {
      hooks.result.current.setPhone("123456789a");
    });
    expect(hooks.result.current.isPhoneValid).not.toBeTruthy();
  });

  it("increment count", async () => {
    act(() => {
      hooks.result.current.increment();
    });
    expect(hooks.result.current.count).toBe(1);
  });
});

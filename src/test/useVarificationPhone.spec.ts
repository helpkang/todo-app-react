//test useVarificationPhone.ts with jest
import {
  renderHook,
  act,
  RenderHookResult,
  waitFor,
} from "@testing-library/react";
import * as uvp from "./_userVarificationPhone";
import { Dispatch, SetStateAction } from "react";
import sinon from "ts-sinon";
import redux, { ReactReduxContextValue } from "react-redux";
import { Action, AnyAction } from "@reduxjs/toolkit";
import { phoneRegex, useVarificationPhone } from "./useVarificationPhone";

type TypeResult = RenderHookResult<
  {
    phone: string;
    setPhone: Dispatch<SetStateAction<string>>;
    isPhoneValid: boolean;
    count: number;
    increment: () => void;
  },
  unknown
>;

describe("useVarificationPhone tests : ", () => {
  let hooks: TypeResult;
  beforeAll(() => {
    sinon.stub(uvp, "_userVarificationPhone").returns({
      phone: "",
      setPhone: function (phone) {
        this.phone = phone.toString();
        this.isPhoneValid = phoneRegex.test(this.phone);
      },
      isPhoneValid: true,
    });
    sinon.stub(uvp, "_useCounter").returns({
      count: 0,
      increment: function () {
        this.count++;
      },
    });
  });

  beforeEach(() => {
    hooks = renderHook(() => useVarificationPhone());
  });

  it("phone number digit 10 success", async () => {
    const { result } = hooks;
    act(() => {
      result.current.setPhone("1234567890");
    });
    await waitFor(() => {
      expect(result.current.isPhoneValid).toBeTruthy();
    });
  });

  it("phone number digit 11 success", async () => {
    const { result } = hooks;
    act(() => {
      result.current.setPhone("12345678901");
    });
    await waitFor(() => {
      expect(result.current.phone).toBe("12345678901");
      expect(result.current.isPhoneValid).toBeTruthy();
    });
  });

  it("phone number digit 9 fail", async () => {
    const { result } = hooks;
    act(() => {
      result.current.setPhone("123456789");
    });
    waitFor(() => {
      console.log("result.current.phone", result.current.phone);
      expect(result.current.isPhoneValid).toBe(false);
    });
  });
  it("phone albhabet fail", () => {
    const { result } = hooks;
    act(() => {
      result.current.setPhone("123456789a");
    });
    waitFor(() => {
      expect(result.current.isPhoneValid).toBe(false);
    });
  });

  it("increment count", () => {
    const { result } = hooks;
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });
});

import * as uvp from "../_userVarificationPhone";
import { useState } from "react";
import sinon from "ts-sinon";

export function initMock() {
  sinon.stub(uvp, "_useChangeCounter").callsFake(() => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return { count, increment };
  });

  sinon.stub(uvp, "_userVarificationPhone").callsFake(
    (
      onPhoneChange?: (phone: string) => void
    ): {
      phone: string;
      setPhone: (phone: string) => void;
      isPhoneValid: boolean;
    } => {
      const [phone, orignalSetPhone] = useState("");
      const [isPhoneValid, setIsPhoneValid] = useState(false);
      return {
        phone,
        setPhone: (phone: string): void => {
          orignalSetPhone(phone);
          setIsPhoneValid(uvp._phoneTest(phone));
          onPhoneChange && onPhoneChange(phone);
        },
        isPhoneValid,
      };
    }
  );
}

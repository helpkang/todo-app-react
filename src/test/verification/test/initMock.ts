import * as uvp from "../_userVarificationPhone";
import { useState } from "react";
import sinon from "ts-sinon";

export function initMock() {
  init();
  init2();
}
function init() {
  sinon.stub(uvp, "_useCounterChangePhone").callsFake(() => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    };
    return { count, increment };
  });
}

function init2() {
  sinon
    .stub(uvp, "_userVarificationPhone")
    .callsFake(function (onPhoneChange?: (eventPhone: string) => void) {
      const [phone, setOriginalPhone] = useState("");
      const [isPhoneValid, setIsPhoneValid] = useState(false);
      return {
        phone,
        setPhone: (phone: string): void => {
          setOriginalPhone(phone);
          setIsPhoneValid(uvp._phoneTest(phone));
          onPhoneChange && onPhoneChange(phone);
        },
        isPhoneValid,
      };
    });
}

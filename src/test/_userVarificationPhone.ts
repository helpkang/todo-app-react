import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { phoneRegex } from "./useVarificationPhone";

export function _userVarificationPhone() {
  const [phone, setPhone] = useState<string>("");
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

  useEffect(() => {
    setIsPhoneValid(phoneRegex.test(phone));
  }, [phone]);
  return { phone, setPhone, isPhoneValid };
}

export function _useCounter() {
  const count = useSelector((state: any) => state.count);
  const dispath = useDispatch();
  const increment = () => {
    dispath({ type: "INCREMENT" });
  };
  return { count, increment };
}

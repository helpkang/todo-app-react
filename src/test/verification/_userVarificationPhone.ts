import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const phoneRegex = /^[0-9]{9,10}$/;

export type UserVarificationPhone = {
  phone: string;
  setPhone: (phone: string) => void;
  isPhoneValid: boolean;
};

export function _userVarificationPhone(
  onPhoneChange?: (phone: string) => void
): UserVarificationPhone {
  const [phone, setPhone] = useState<string>("");
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

  useEffect(() => {
    setIsPhoneValid(_phoneTest(phone));
    onPhoneChange && onPhoneChange(phone);
  }, [phone]);
  return { phone, setPhone, isPhoneValid };
}

export function _useCounterChangePhone() {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();
  function increment() {
    dispatch({ type: "INCREMENT" });
  }
  return { count, increment };
}

export function _phoneTest(phone: string) {
  return phoneRegex.test(phone);
}

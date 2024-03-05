import { _userVarificationPhone, _useCounter } from "./_userVarificationPhone";

export const phoneRegex = /^[0-9]{10,11}$/;

export function useVarificationPhone() {
  const { phone, setPhone, isPhoneValid } = _userVarificationPhone();
  const { count, increment } = _useCounter();
  return { phone, setPhone, isPhoneValid, count, increment};
}


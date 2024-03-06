import {
  _userVarificationPhone,
  _useChangeCounter,
} from "./_userVarificationPhone";

export function useVarificationPhone() {
  const { count, increment } = _useChangeCounter();
  const onPhoneChange=(phone: string)=> {
    increment();
  }
  const { phone, setPhone, isPhoneValid } =
    _userVarificationPhone(onPhoneChange);
  return { phone, setPhone, isPhoneValid, count, increment };
}

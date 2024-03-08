import {
  _userVarificationPhone,
  _useCounterChangePhone,
} from "./_userVarificationPhone";

/**
 * @returns {phone, setPhone, isPhoneValid, count, increment}
 */
export function useVarificationPhone() {
  const { count, increment } = _useCounterChangePhone();
  function onPhoneChange(phone: string) {
    increment();
  }
  const { phone, setPhone, isPhoneValid } =
    _userVarificationPhone(onPhoneChange);
  return { phone, setPhone, isPhoneValid, count, increment };
}

import dayjs from "dayjs";
import { HotelResponse } from "../model/hotel";

export function getCommaNumber(number: number) {
  let [integerPart, decimalPart] = number.toString().split(".");
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

export function phoneFormatter(num?: string) {
  if (!num) return "";

  var formatNum = "";
  try {
    if (num.length == 11) {
      formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    } else if (num.length == 8) {
      formatNum = num.replace(/(\d{4})(\d{4})/, "$1-$2");
    } else {
      if (num.indexOf("02") == 0) {
        formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
      } else {
        formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      }
    }
  } catch (e) {
    formatNum = num;
  }
  return formatNum;
}

export function checkPhoneNumber(number: string) {
  const regExp = new RegExp(/^[0-9|-]*$/);
  return regExp.test(number) === true;
}

export function getFullAddress(hotelInfo: HotelResponse | undefined) {
  if (!hotelInfo) return "";

  return `${hotelInfo.address}`;
}

export function stringToDateFormat(date: string, pattern?: string) {
  return dayjs(date).format(pattern ?? "YYYY.MM.DD");
}

export function isEmailValid(email_address: string): boolean {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return email_regex.test(email_address);
}

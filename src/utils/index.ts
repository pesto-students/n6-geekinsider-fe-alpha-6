import * as CSS from "csstype";
import { Auth } from "aws-amplify";

export const industryTypes = [
  "Information Technology & Services",
  "Hospital & Health Care",
  "Construction",
  "Retail",
  "Education Management",
  "Financial Services",
  "Accounting",
  "Computer Software",
  "Higher Education",
  "Automotive",
];

export const iconStyles: CSS.Properties<string | number> = {
  position: "relative",
  top: "2px",
  marginRight: "5px",
};

export const isAuthenticated = () => {
  return localStorage.getItem("access_token") ? true : false;
};

export const generateGithubUrl = (userName: string) =>
  `https://github.com/${userName}`;

export const whatsAppBaseUrl = "https://wa.me";

export const getWhatsAppUrl = (whatsappNumber: string, name: string) => {
  let number = whatsappNumber;
  number = number?.replace(/[^\w\s]/gi, "").replace(/ /g, "");
  const url = `${whatsAppBaseUrl}/${number}?text=${encodeURI(
    `Hello ${name}!!`
  )}`;
  return url;
};

export const unionArray = (
  firstArray: any,
  secondArray: any,
  uniqueKeyName: string
) => {
  const keys: any = {};
  // accumulating keys as the uniqueKeyName with value as the whole object of the firstArray
  for (const each of firstArray) {
    keys[each[uniqueKeyName]] = each;
  }

  // checking if the second array has the key, if yes then replacing that object present in secondArray with the value of the key in keys object, else returning the object as is.
  // everything gets accumulated in an array, returning that array
  return secondArray.map((itm: any) => {
    if (keys[itm[uniqueKeyName]]) {
      return keys[itm[uniqueKeyName]];
    } else return itm;
  });
};

export const getUser = () => {
  return {
    user: JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("access_token"),
  };
};

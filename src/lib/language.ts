"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import DefualtKo from "@/lang/ko.json";
import DefualtEn from "@/lang/en.json";
const resource = {
  ko: {
    translation: DefualtKo,
  },
  en: {
    translation: DefualtEn,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: "ko",
  debug: true,
  compatibilityJSON: "v4",
  interpolation: { escapeValue: false },
});

if (typeof window !== "undefined") {
  let language = localStorage.getItem("language");
  if (language !== null) i18n.changeLanguage(language);
}

export function changeLanguage(lang: string) {
  i18n.changeLanguage(lang);
  localStorage.setItem("language", lang);
}

export default i18n;

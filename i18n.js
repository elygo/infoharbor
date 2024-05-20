import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import En from "./src/translations/en/en.json";
import Ru from "./src/translations/ru/ru.json";
import Uz from "./src/translations/uz/uz.json";
import De from "./src/translations/de/de.json";

const resources = {
    Uz,
    De,
    En,
    Ru,
};

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).init({
    resources,
    lng: window.localStorage.i18nextLng,
    defaultNS: "common",
    fallbackLng: "En",
});

export default i18n;

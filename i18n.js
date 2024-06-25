import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import En from "./src/translations/en/en.json";
import Ru from "./src/translations/ru/ru.json";
import Uz from "./src/translations/uz/uz.json";
import De from "./src/translations/de/de.json";

const domain = window.location.hostname.split('.').pop();

const resources = {
    Uz,
    En,
    Ru,
    De
};

const resourcesUz = {
    Uz,
    En,
    Ru
};

const resourcesDe = {
    De,
    En,
};

export const availableLanguages = domain == "de" ? Object.keys(resourcesDe) : Object.keys(resourcesUz);

i18n.use(initReactI18next).init({
    resources,
    lng: window.localStorage.i18nextLng?.toString().toLowerCase() == domain ? window.localStorage.i18nextLng : "En",
    defaultNS: "common",
    fallbackLng: domain == "de" ? "De" : "Uz"
});

export default i18n;

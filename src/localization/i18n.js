import { createI18n } from "vue-i18n";
import EN from "./EN.json";
import UA from "./UA.json";

// Type-define 'en-US' as the master schema for the resource

const data = import.meta.glob("../localization/*.json");

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: "EN",
  availableLocales: ["EN", "UA"],
  messages: {
    EN,
    UA,
  },
});
import { createAdminApiClient } from "./admin/services/api/createAdminApiClient";
import { getAppConfig } from "./config";
import { createShopeeApiClient } from "./shopee/services/api/createShopeeApiClient";
import { getAppLinks } from "./links";
import { createApiClient } from "./common/services/api/createApiClient";
import en from "../locales/en.json";
import i18next from "i18next";
import languagedetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const translator = i18next
  .createInstance({
    fallbackLng: "en",
    resources: {
      en: { translation: en },
    },
    debug: true,
  })
  .use(initReactI18next)
  .use(languagedetector)
  .init();
const config = getAppConfig();
const links = getAppLinks();
const adminApiClient = createAdminApiClient(
  createApiClient({ baseURL: config.api.adminEndpoint })
);
const shopeeApiClient = createShopeeApiClient(
  createApiClient({ baseURL: config.api.shopeeEndpoint })
);

export const getAppContainer = () => ({
  config,
  links,
  adminApiClient,
  shopeeApiClient,
  translator,
});

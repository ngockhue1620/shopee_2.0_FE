import { createAdminApiClient } from "./admin/services/api/createAdminApiClient";
import { getAppConfig } from "./config";
import { createShopeeApiClient } from "./shopee/services/api/createShopeeApiClient";
import { getAppLinks } from "./links";
import { createApiClient } from "./common/services/api/createApiClient";

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
});

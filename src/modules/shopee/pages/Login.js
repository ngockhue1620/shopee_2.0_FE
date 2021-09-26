import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import useAsync from "../../common/hooks/useAsync";

export default function Login() {
  const api = useShopeeApiClient();
  const login = useAsync(async (data) => {
    const result = await api.login(data);
    if (result) {
    }
  });
  return <MainLayout>login page</MainLayout>;
}

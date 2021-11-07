import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import useAsync from "../../common/hooks/useAsync";
import useQuery from "../../common/hooks/useQuery";
import { EmptyLayout } from "../../common/layouts/EmptyLayout";
import { ProductList } from "../components/product/ProductList";
import { useShopeeApiClient } from "../hooks/useShopeeApiClient";
import { HeaderLayout } from "../layouts/HeaderLayout";

export const ProductPage = () => {
  const api = useShopeeApiClient();
  const perLoad = 48;
  const { query, patchQuery } = useQuery({
    page: 1,
  });
  const getProducts = useAsync(
    async () =>
      await api.getProducts({
        limit: perLoad,
        offset: query.page,
      })
    
  );
  const handleChangePage = (event, value) => {
    patchQuery({
      page: value,
    });
  };

  useEffect(() => {
    getProducts.run();
  }, [query.page]);
  return (
    <EmptyLayout>
      <HeaderLayout>
        <ProductList products={getProducts.result?.results} />
        <Pagination
          count={Math.ceil(getProducts.result?.count / perLoad)}
          onChange={handleChangePage}
          color="primary"
          shape="rounded"
        />
      </HeaderLayout>
    </EmptyLayout>
  );
};

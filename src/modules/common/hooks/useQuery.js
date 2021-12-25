import { useState, useCallback, useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { parse, stringify } from "query-string";

const useQuery = (initialQuery) => {
  const history = useHistory();
  const location = useLocation();
  const query = { ...initialQuery, ...parse(location.search) };

  const patchQuery = (newQuery) => {
    history.push({
      pathname: location.pathname,
      search: stringify(newQuery),
    });
  };

  return {
    query,
    patchQuery,
  };
};

export default useQuery;

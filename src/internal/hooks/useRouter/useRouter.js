import { useMemo } from 'react';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import queryString from 'query-string';

export default function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    const queryParams = location.search.length
      ? queryString.parse(location.search)
      : null;

    return {
      push: history.push,
      navigate: history.push,
      setQueryParam: (key, value) => {
        const updatedQueryParams = queryParams
          ? {
              ...queryParams,
              [key]: value,
            }
          : { [key]: value };
        history.push({
          ...location,
          search: queryString.stringify(updatedQueryParams),
        });
      },
      removeQueryParam: (key) => {
        if (Object.keys(queryParams)?.length) {
          const updatedQueryParams = Object.fromEntries(
            Object.entries(queryParams)?.filter(([paramKey, paramVal]) => {
              return paramKey !== key;
            })
          );
          history.push({
            ...location,
            search: queryString.stringify(updatedQueryParams),
          });
        }
      },
      replace: history.replace,
      pathname: location.pathname,
      params,
      queryParams,
      match,
      location,
      history,
      url: match.url,
    };
  }, [params, match, location, history]);
}

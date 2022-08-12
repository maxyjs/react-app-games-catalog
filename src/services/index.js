const API_KEY = "4b929081e7d34215a4e331ccb2b4a3ee";
const API_BASE = "https://api.rawg.io/api";

const createURL = (params = {}) => {
  if (!params.BASE || !params.pathname) {
    throw new Error("Invalid url parameters");
  }

  return encodeURI(
    `${params.BASE}${params.pathname}?${Object.entries(params.query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")}`
  );
};

export const getRequest = async (urlParams = { pathname: null, query: {} }) => {
  const query = {
    key: API_KEY,
    ...Object.entries(urlParams.query || {}).reduce(
      (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
      {}
    ),
  };

  if (query.search) {
    query.search_exact = true;
  }

  const url = createURL({
    BASE: API_BASE,
    pathname: urlParams.pathname,
    query: {
      key: API_KEY,
      ...Object.entries(urlParams.query || {}).reduce(
        (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
        {}
      ),
    },
  });

  const response = await fetch(url);

  if (!response.ok) {
    const json = await response.json();

    throw new Error(json.detail || `Bad fetch request to '${url}'`);
  }

  return await response.json();
};

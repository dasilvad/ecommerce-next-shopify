import { ApiFetchOptions, ApiFetcherResults } from "./../../common/types/api";

const fetchApi = async <T>({
  url,
  query,
}: ApiFetchOptions): Promise<ApiFetcherResults<T>> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    //?? check if value is null or undefined (0 and false it is valid)
    throw new Error(errors[0].message ?? errors.message);
  }

  return { data };
};

export default fetchApi;

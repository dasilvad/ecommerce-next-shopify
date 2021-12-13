export type ApiFetchOptions = {
  url: string;
  query: string;
};

export type ApiFetcherResults<T> = {
  data: T;
};

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetchOptions): Promise<ApiFetcherResults<T>>;
}

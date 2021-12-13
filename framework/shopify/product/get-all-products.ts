import { ApiConfig } from "./../../common/types/api";
import { Product } from "@common/types/products";
import { ProductConnection } from "./../schema.d";
import { normalizeProduct, getAllProductsQuery } from "../utils";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    url: config.apiUrl,
    query: getAllProductsQuery,
  });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    [];

  return products;
};

export default getAllProducts;

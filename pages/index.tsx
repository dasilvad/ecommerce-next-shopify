import { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/product/get-all-products";
import { getConfig } from "@framework/api/config";
import { Layout } from "@components/common";

//import play from "../playground";
export async function getStaticProps() {
  const config = getConfig();
  console.log(config.apiUrl);
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      {JSON.stringify(products)} {products[0].name}
    </div>
  );
}

Home.Layout = Layout;

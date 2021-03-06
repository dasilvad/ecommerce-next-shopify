import { Product } from "@common/types/products";
import { FC } from "react";

interface Props {
  product: Product;
}
const ProductCard: FC<Props> = ({ product }) => {
  return <div>{product.name}</div>;
};

export default ProductCard;

import { Product } from "../../types";
import ProductCard from "../ProductCard";
import * as S from "./styles";

interface ProductsListProps {
    list: Product[]
}

const ProductsList = ({list}: ProductsListProps) => {
  return (
    <S.ProductsListContainer>
      {list.map((element, index) => (
        <ProductCard product={element} key={index}/>
      ))}
    </S.ProductsListContainer>
  );
};

export default ProductsList;

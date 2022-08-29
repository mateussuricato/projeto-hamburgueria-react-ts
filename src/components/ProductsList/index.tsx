import { Product } from "../../types";
import ProductCard from "../ProductCard";
import * as S from "./styles";

interface ProductsListProps {
  list: Product[];
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

const ProductsList = ({
  list,
  isFavoritesList,
  handleGetFavorites,
}: ProductsListProps) => {
  return (
    <S.ProductsListContainer>
      {list.map((element, index) => (
        <ProductCard
          isFavoritesList={isFavoritesList}
          handleGetFavorites={handleGetFavorites}
          product={element}
          key={index}
        />
      ))}
    </S.ProductsListContainer>
  );
};

export default ProductsList;

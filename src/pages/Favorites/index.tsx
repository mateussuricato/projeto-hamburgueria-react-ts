import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import ProductCard from "../../components/ProductCard";
import { mockedFavorites } from "../../mocks";
import * as S from "./styles";

interface FavoriteProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Favorites = ({ setLogged }: FavoriteProps) => {
  return (
    <div>
      <S.FavoriteContainer>
        <Menu path="favorites" setLogged={setLogged} />
        <S.FavoritesNavigationContainer>
          <h2>Favoritos</h2>

          <div>
              {mockedFavorites.map((element) => {
                return (
                  <S.FavoriteCardContainer>
                    <S.FavoriteCard>
                      <img src={element.image} alt="" />
                      <h3>{element.productName}</h3>
                      <p>{element.description}</p>
                      <p>{element.price}</p>
                    </S.FavoriteCard>
                  </S.FavoriteCardContainer>
                );
              })}
          </div>
        </S.FavoritesNavigationContainer>
      </S.FavoriteContainer>
    </div>
  );
};

export default Favorites;

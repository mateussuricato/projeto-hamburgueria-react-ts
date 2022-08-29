import toast from "react-hot-toast";
import { api } from "../../services";
import { Favorite, Product, User } from "../../types";
import Button from "../Button";
import * as S from "./styles";

interface ProductCardProps {
  product: Product;
  isFavoritesList: boolean;
  handleGetFavorites: () => void;
}

const ProductCard = ({
  product,
  isFavoritesList,
  handleGetFavorites,
}: ProductCardProps) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const user: User = JSON.parse(localStorage.getItem("user") || "");

  const handleSetFavorite = () => {
    const data = {
      userId: user.id,
      productName: product.name,
    };

    api
      .post("/favorites", data, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Produto favoritado com sucesso!");
      })
      .catch(() => {
        toast.error("Produto já favoritado");
      });
  };

  const handleRemoveFavorite = async () => {
    const res = await api.get<Favorite[]>(
      `/favorites/user/${user?.id}`,
      headers
    );

    const favoriteId: String | undefined = res.data
      .filter((elem) => elem.productName === product.name)
      .find((elem) => elem.userId === user.id)?.id;

    api
      .delete(`favorites/${favoriteId}`, headers)
      .then(() => {
        handleGetFavorites();
        toast.success("Produto desfavoritado");
      })
      .catch(() => {
        toast.error("Erro");
      });
  };

  return (
    <S.CardContainer>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Button
        onClick={isFavoritesList ? handleRemoveFavorite : handleSetFavorite}
        text={isFavoritesList ? "Desfavoritar" : "Favoritar"}
        size="small"
      />
    </S.CardContainer>
  );
};

export default ProductCard;

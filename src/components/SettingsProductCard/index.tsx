import { Product } from "../../types";
import * as S from "./styles";
import { EditIcon } from "../../assets/icons";

interface SettingsProductCardProps {
  product: Product;
}

const SettingsProductCard = ({ product }: SettingsProductCardProps) => {
  return (
    <S.SettingsProductCardContainer>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <S.SettingsProductCardButton>
        <EditIcon /> Editar prato
      </S.SettingsProductCardButton>
    </S.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;

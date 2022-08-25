import { Product } from "../../types";
import * as S from "./styles";
import { EditIcon } from "../../assets/icons";
import { Dispatch, SetStateAction } from "react";

interface SettingsProductCardProps {
  product: Product;
  handleOpenModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const SettingsProductCard = ({
  product,
  handleOpenModal,
  setProduct,
}: SettingsProductCardProps) => {
  return (
    <S.SettingsProductCardContainer>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <S.SettingsProductCardButton
        onClick={() => {
          setProduct(product);
          handleOpenModal();
        }}
      >
        <EditIcon /> Editar
      </S.SettingsProductCardButton>
    </S.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;

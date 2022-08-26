import { Product } from "../../types";
import * as S from "./styles";
import { EditIcon, TrashIcon } from "../../assets/icons";
import { Dispatch, SetStateAction } from "react";

interface SettingsProductCardProps {
  product: Product;
  handleOpenModal: () => void;
  handleOpenDeleteModal: () => void;
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
}

const SettingsProductCard = ({
  product,
  handleOpenModal,
  handleOpenDeleteModal,
  setProduct,
}: SettingsProductCardProps) => {
  return (
    <S.SettingsProductCardContainer>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>R${product.price}</p>
      <div>
        <S.SettingsProductEditButton
          onClick={() => {
            setProduct(product);
            handleOpenModal();
          }}
        >
          <EditIcon /> Editar
        </S.SettingsProductEditButton>
        <S.SettingsProductDeleteButton onClick={() => {
          setProduct(product)
          handleOpenDeleteModal();
        }}>
          <TrashIcon /> Remover
        </S.SettingsProductDeleteButton>
      </div>
    </S.SettingsProductCardContainer>
  );
};

export default SettingsProductCard;

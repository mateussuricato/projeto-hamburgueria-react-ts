import Menu from "../../components/Menu";
import * as S from "./styles";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import Button from "../../components/Button";
import SettingsProductCard from "../../components/SettingsProductCard";
import { useProducts } from "../../contexts/products";
import { useState } from "react";
import ProductModal from "../../components/ProductModal";
import { Product } from "../../types";

const Settings = () => {
  const { products } = useProducts();

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [product, setProduct] = useState<Product | undefined>(undefined)

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <S.SettingsContainer>
      <Menu path="settings" />
      <S.SettingsNavigationContainer>
        <h2>Configurações</h2>
        <S.SettingsNavigationButtonsList>
          <div>
            <S.SettingsNavigationButtonsContainer>
              <S.SettingsNavigationButtonsSelected>
                <MarketIcon />
                <h2>Customize suas mesas</h2>
                <p>Adicione mesas, configure nomes</p>
              </S.SettingsNavigationButtonsSelected>
            </S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonsContainer active>
              <S.SettingsNavigationButtonsSelected active>
                <PromotionIcon />
                <h2>Gerenciar Produtos</h2>
                <p>Edite os pratos, preços e etc.</p>
              </S.SettingsNavigationButtonsSelected>
            </S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonsContainer>
              <S.SettingsNavigationButtonsSelected>
                <PromotionIcon />
                <h2>Gerenciar Categorias</h2>
                <p>Adicione e edite categorias</p>
              </S.SettingsNavigationButtonsSelected>
            </S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonsContainer>
              <S.SettingsNavigationButtonsSelected>
                <InfoIcon />
                <h2>Gerenciar usuários</h2>
                <p>Gerencie o acesso ao sistema</p>
              </S.SettingsNavigationButtonsSelected>
            </S.SettingsNavigationButtonsContainer>
          </div>
        </S.SettingsNavigationButtonsList>
      </S.SettingsNavigationContainer>
      <S.EntitiesEditContainer>
        <h2>Gerenciar Produtos</h2>
        <S.EntitiesEditCategoriesSelector>
          <S.EntitiesEditCategoriesButton active>
            Lanches
          </S.EntitiesEditCategoriesButton>
          <S.EntitiesEditCategoriesButton>
            Porções
          </S.EntitiesEditCategoriesButton>
          <S.EntitiesEditCategoriesButton>
            Bebidas
          </S.EntitiesEditCategoriesButton>
        </S.EntitiesEditCategoriesSelector>
        <S.EntitiesEditList>
          <S.AddEntityCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Adicionar Item</p>
          </S.AddEntityCard>
          {products.map((element) => (
            <SettingsProductCard
              handleOpenModal={handleOpenModal}
              setProduct={setProduct}
              product={element}
              key={element.id}
            />
          ))}
        </S.EntitiesEditList>
        <S.ConfirmationContainer>
          <Button text="Cancelar" variant="cancel"></Button>
          <Button text="Salvar Mudanças"></Button>
        </S.ConfirmationContainer>
      </S.EntitiesEditContainer>
      {openModal && (
        <ProductModal product={product} handleOpenModal={handleOpenModal} />
      )}
    </S.SettingsContainer>
  );
};

export default Settings;

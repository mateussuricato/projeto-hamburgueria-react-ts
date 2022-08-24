import { Dispatch, SetStateAction } from "react";
import Menu from "../../components/Menu";
import * as S from "./styles";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import Button from "../../components/Button";
import { mockedProducts } from "../../mocks";
import SettingsProductCard from "../../components/SettingsProductCard";

const Settings = () => {
  return (
    <S.SettingsContainer>
      <Menu path="settings"/>
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
          <S.AddEntityCard>
            <h2>+</h2>
            <p>Adicionar Item</p>
          </S.AddEntityCard>
          {mockedProducts.map((element) => (
            <SettingsProductCard product={element} key={element.id} />
          ))}
        </S.EntitiesEditList>
        <S.ConfirmationContainer>
          <Button text="Cancelar" variant="cancel"></Button>
          <Button text="Salvar Mudanças"></Button>
        </S.ConfirmationContainer>
      </S.EntitiesEditContainer>
    </S.SettingsContainer>
  );
};

export default Settings;

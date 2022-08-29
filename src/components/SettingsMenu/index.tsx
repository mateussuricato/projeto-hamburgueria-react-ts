import { useNavigate } from "react-router-dom";
import { InfoIcon, MarketIcon, PromotionIcon } from "../../assets/icons";
import * as S from "./styles";

interface SettigsMenuProps {
  path: "users" | "tables" | "categories" | "products";
}

const SettingsMenu = ({ path }: SettigsMenuProps) => {
  const navigate = useNavigate();
  return (
    <>
      <S.SettingsNavigationContainer>
        <h2>Configurações</h2>
        <S.SettingsNavigationButtonsList>
          <div>
            <S.SettingsNavigationButtonsContainer
              active={path === "tables"}
              onClick={() => navigate("/settings/tables")}
            >
              <S.SettingsNavigationButtonsSelected active={path === "tables"}>
                <MarketIcon />
                <h2>Customize suas mesas</h2>
                <p>Adicione mesas, configure nomes</p>
              </S.SettingsNavigationButtonsSelected>
            </S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonsContainer
              active={path === "products"}
              onClick={() => navigate("/settings/products")}
            >
              <S.SettingsNavigationButtonsSelected active={path === "products"}>
                <PromotionIcon />
                <h2>Gerenciar Produtos</h2>
                <p>Edite os pratos, preços e etc.</p>
              </S.SettingsNavigationButtonsSelected>
            </S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonsContainer
              active={path === "categories"}
              onClick={() => navigate("/settings/categories")}
            >
              <S.SettingsNavigationButtonsSelected
                active={path === "categories"}
              >
                <PromotionIcon />
                <h2>Gerenciar Categorias</h2>
                <p>Adicione e edite categorias</p>
              </S.SettingsNavigationButtonsSelected>
            </S.SettingsNavigationButtonsContainer>
            <S.SettingsNavigationButtonsContainer
              active={path === "users"}
              onClick={() => navigate("/settings/users")}
            >
              <S.SettingsNavigationButtonsSelected active={path === "users"}>
                <InfoIcon />
                <h2>Gerenciar usuários</h2>
                <p>Gerencie o acesso ao sistema</p>
              </S.SettingsNavigationButtonsSelected>
            </S.SettingsNavigationButtonsContainer>
          </div>
        </S.SettingsNavigationButtonsList>
      </S.SettingsNavigationContainer>
    </>
  );
};

export default SettingsMenu;

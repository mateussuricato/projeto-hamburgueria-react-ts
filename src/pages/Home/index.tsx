import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as S from "./styles";
import { DateTime } from "luxon";

const Home = () => {
  const date = DateTime.now();
  const formatedDate = `${date.weekdayShort} ${date.day} ${date.monthLong} ${date.year}`;

  return (
    <S.HomeContainer>
      <Menu path="home" />
      <S.HomeContentContainer>
        <S.HomeContentHeader>
          <S.TitleContainer>
            <h1>Bruger Fresh</h1>
            <p>{formatedDate}</p>
          </S.TitleContainer>
          <S.SearchInputContainer>
            <SearchIcon />
            <input type="text" placeholder="Procure pelo sabor" />
          </S.SearchInputContainer>
        </S.HomeContentHeader>
        <section>
          <S.CategoriesNavigationBar>
            <S.CategoriesNavigationButton active>Lanches</S.CategoriesNavigationButton>
            <S.CategoriesNavigationButton>Porções</S.CategoriesNavigationButton>
            <S.CategoriesNavigationButton>Bebidas</S.CategoriesNavigationButton>
          </S.CategoriesNavigationBar>
          <S.ProductsHeaderContainer>
            <h2>Escolha seu lanche</h2>
            <S.TableSelect>
              <option value="" disabled selected>Selecione a mesa</option>
              <option value="1">1</option>
            </S.TableSelect>
          </S.ProductsHeaderContainer>
          <div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
          </div>
        </section>
      </S.HomeContentContainer>
      <aside>
        <header>
          <h2>Pedido 12</h2>
          <div>
            <button>Comer no Local</button>
            <button>P/ Viagem</button>
            <button>Delivery</button>
          </div>
        </header>
        <div>
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
            <h3>Preço</h3>
          </div>
          <div>
            <div>Card Checkout</div>
            <div>Card Checkout</div>
            <div>Card Checkout</div>
          </div>
        </div>
        <div>
          <div>
            <p>Desconto</p>
            <p>R$0,00</p>
          </div>
          <div>
            <p>Sub Total</p>
            <p>R$0,00</p>
          </div>
          <button>Continuar para o pagamento</button>
        </div>
      </aside>
    </S.HomeContainer>
  );
};

export default Home;

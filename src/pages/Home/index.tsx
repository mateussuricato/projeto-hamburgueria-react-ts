import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as S from "./styles";
import { DateTime } from "luxon";
import { mockedProducts } from "../../mocks";
import ProductsList from "../../components/ProductsList";
import { mockedCategories } from "../../mocks";
import { useState } from "react";
import { Category, Product } from "../../types";
import OrderDetails from "../../components/OrderDetails";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducts.filter(
    (element) => element.categoryId === selectedCategory.id
  );

  const handleChangeCategory = (category: Category) => {
    setSelectedCategory(category);
  };
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
            {mockedCategories.map((element) => {
              return (
                <S.CategoriesNavigationButton
                  active={element.name === selectedCategory.name}
                  onClick={() => handleChangeCategory(element)}
                >
                  {element.name}
                </S.CategoriesNavigationButton>
              );
            })}
          </S.CategoriesNavigationBar>
          <S.ProductsHeaderContainer>
            <h2>Escolha seu lanche</h2>
            <S.TableSelect>
              <option value="" disabled selected>
                Selecione a mesa
              </option>
              <option value="1">1</option>
            </S.TableSelect>
          </S.ProductsHeaderContainer>
          <ProductsList list={filteredProducts} />
        </section>
      </S.HomeContentContainer>
      <OrderDetails />
    </S.HomeContainer>
  );
};

export default Home;

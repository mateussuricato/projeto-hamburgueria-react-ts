import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as S from "./styles";
import { DateTime } from "luxon";
import ProductsList from "../../components/ProductsList";
import { useState } from "react";
import { Category, Product } from "../../types";
import OrderDetails from "../../components/OrderDetails";
import { useProducts } from "../../contexts/products";
import { useCategories } from "../../contexts/categories";

const Home = () => {
  const { categories } = useCategories();
  const { products } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>(
    categories[0]
  );

  const filteredProducts: Product[] = products.filter(
    (element) => selectedCategory && element.categoryId === selectedCategory.id
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
            {categories.length > 0 &&
              categories.map((element) => {
                return (
                  <S.CategoriesNavigationButton
                    active={element.name === selectedCategory?.name}
                    onClick={() => handleChangeCategory(element)}
                    key={element.id}
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

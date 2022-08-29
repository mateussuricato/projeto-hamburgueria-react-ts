import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as S from "./styles";
import { DateTime } from "luxon";
import ProductsList from "../../components/ProductsList";
import { useEffect, useState } from "react";
import { Category, Favorite, Product, User } from "../../types";
import OrderDetails from "../../components/OrderDetails";
import { useProducts } from "../../contexts/products";
import { useCategories } from "../../contexts/categories";
import { api } from "../../services";

const Home = () => {
  const { categories } = useCategories();
  const { products } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(categories[1]);

  const [isFavoritesList, setIsFavoritesList] = useState<boolean>(false);
  const [userFavoritesList, setUserFavoritesList] = useState<Product[]>([]);

  const filteredProducts: Product[] = products.filter(
    (element) => selectedCategory && element.categoryId === selectedCategory.id
  );

  const handleGetFavorites = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const user: User = JSON.parse(localStorage.getItem("user") || "");

    const res = await api.get<Favorite[]>(
      `/favorites/user/${user?.id}`,
      headers
    );

    const favorites = res.data

    const favoritesNames: string[] = favorites.map((elem) => elem.productName);

    const favoritesList: Product[] = products.filter((elem) => {
      return favoritesNames.includes(elem.name);
    });

    setUserFavoritesList(favoritesList);
  };

  const handleChangeCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  const date = DateTime.now();
  const formatedDate = `${date.weekdayShort} ${date.day} ${date.monthLong} ${date.year}`;

  useEffect(() => {
    handleGetFavorites();
  }, [products]);

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
            {categories.map((element) => {
              return (
                <S.CategoriesNavigationButton
                  active={element.name === selectedCategory?.name}
                  onClick={() => {
                    handleChangeCategory(element);
                    setIsFavoritesList(false);
                  }}
                  key={element.id}
                >
                  {element.name}
                </S.CategoriesNavigationButton>
              );
            })}
            <S.CategoriesNavigationButton
              active={isFavoritesList}
              onClick={() => {
                setIsFavoritesList(true);
                setSelectedCategory({} as Category);
              }}
            >
              Favoritos
            </S.CategoriesNavigationButton>
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
          <ProductsList
            list={isFavoritesList ? userFavoritesList : filteredProducts}
          />
        </section>
      </S.HomeContentContainer>
      <OrderDetails />
    </S.HomeContainer>
  );
};

export default Home;

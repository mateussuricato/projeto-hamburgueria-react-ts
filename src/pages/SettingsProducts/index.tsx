import Menu from "../../components/Menu";
import * as S from "./styles";
import { MarketIcon, InfoIcon, PromotionIcon } from "../../assets/icons";
import Button from "../../components/Button";
import SettingsProductCard from "../../components/SettingsProductCard";
import { useProducts } from "../../contexts/products";
import { useState } from "react";
import ProductModal from "../../components/ProductModal";
import { Category, Product } from "../../types";
import DeleteProductModal from "../../components/DeleteProductModal";
import { useCategories } from "../../contexts/categories";
import SettingsMenu from "../../components/SettingsMenu";

const SettingsProducts = () => {
  const { products } = useProducts();

  const { categories } = useCategories();

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] || ({} as Category)
  );

  const filteredProducts: Product[] = products.filter(
    (element) => selectedCategory && element.categoryId === selectedCategory.id
  );

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const [product, setProduct] = useState<Product | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <S.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="products"/>
      <S.EntitiesEditContainer>
        <h2>Gerenciar Produtos</h2>
        <S.EntitiesEditCategoriesSelector>
          {categories.map((element) => {
            return (
              <S.EntitiesEditCategoriesButton
                active={element.name === selectedCategory.name}
                onClick={() => {
                  setSelectedCategory(element);
                }}
              >
                {element.name}
              </S.EntitiesEditCategoriesButton>
            );
          })}
        </S.EntitiesEditCategoriesSelector>
        <S.EntitiesEditList>
          <S.AddEntityCard onClick={handleOpenModal}>
            <h2>+</h2>
            <p>Adicionar Item</p>
          </S.AddEntityCard>
          {filteredProducts.map((element) => (
            <SettingsProductCard
              handleOpenModal={handleOpenModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
              setProduct={setProduct}
              product={element}
              key={element.id}
            />
          ))}
        </S.EntitiesEditList>
        <S.ConfirmationContainer>
          <Button text="Cancelar" variant="cancel"></Button>
          <Button text="Salvar Mudan??as"></Button>
        </S.ConfirmationContainer>
      </S.EntitiesEditContainer>
      {openModal && (
        <ProductModal
          setProduct={setProduct}
          product={product}
          handleOpenModal={handleOpenModal}
        />
      )}
      {openDeleteModal && (
        <DeleteProductModal
          setProduct={setProduct}
          productId={product?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </S.SettingsContainer>
  );
};

export default SettingsProducts;

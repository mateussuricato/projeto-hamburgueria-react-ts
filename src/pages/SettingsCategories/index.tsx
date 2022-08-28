import { useState } from "react";
import { TrashIcon, EditIcon } from "../../assets/icons";
import CategoryModal from "../../components/CategoryModal";
import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useCategories } from "../../contexts/categories";
import { Category } from "../../types";
import * as S from "./styles";

const SettingsCategories = () => {
  const { categories } = useCategories();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [category, setCategory] = useState<Category | undefined>(undefined);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleOpenUpdateModal = (category: Category) => {
    setCategory(category);
    setOpenModal(!openModal);
  };

  return (
    <S.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="categories" />
      <S.EntitiesEditContainer>
        <h2>Gerenciar Categorias</h2>
        <S.EntitiesEditList>
          <S.AddEntityCard onClick={handleOpenModal}>
            <h3>+</h3>
            <p>Adicionar Item</p>
          </S.AddEntityCard>
          {categories.map((element) => {
            return (
              <S.EntityCard key={element.id}>
                <p>{element.name}</p>
                <div>
                  <S.SettingsCategoryEditButton
                    onClick={() => handleOpenUpdateModal(element)}
                  >
                    <EditIcon /> Editar
                  </S.SettingsCategoryEditButton>
                  <S.SettingsCategoryDeleteButton>
                    <TrashIcon /> Remover
                  </S.SettingsCategoryDeleteButton>
                </div>
              </S.EntityCard>
            );
          })}
        </S.EntitiesEditList>
      </S.EntitiesEditContainer>
      {openModal && <CategoryModal setCategory={setCategory} category={category} handleOpenModal={handleOpenModal} />}
    </S.SettingsContainer>
  );
};

export default SettingsCategories;

import {
  ErrorMessage,
  ModalOverlay,
  StyledInput,
} from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useCategories } from "../../contexts/categories";
import { Category } from "../../types";
import { Dispatch, SetStateAction } from "react";

interface CategoryModalProps {
  handleOpenModal: () => void;
  category?: Category;
  setCategory: Dispatch<SetStateAction<Category | undefined>>;
}

interface CategoryData {
  name: string;
}

const CategorySchema = yup.object().shape({
  name: yup.string().required("Nome da categoria obrigatório"),
});

const CategoryModal = ({
  handleOpenModal,
  category,
  setCategory,
}: CategoryModalProps) => {
  const { handleGetCategories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryData>({
    resolver: yupResolver(CategorySchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewCategory = (data: CategoryData) => {
    api
      .post("/categories", data, headers)
      .then(() => {
        toast.success("Categoria criada com sucesso");
        handleGetCategories();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na criação da categoria");
      });
  };

  const handleUpdateCategory = (data: CategoryData) => {
    api
      .patch(`/categories/${category?.id}`, data, headers)
      .then(() => {
        toast.success("Categoria editada com sucesso");
        handleGetCategories();
        handleOpenModal();
      })
      .catch(() => {
        toast.error("Erro na editar da categoria");
      });
  };

  return (
    <ModalOverlay>
      <ModalContainer
        onSubmit={handleSubmit(
          category ? handleUpdateCategory : handleNewCategory
        )}
      >
        <h2>{category ? "Editar Categoria" : "Criar categoria"}</h2>
        <StyledInput
          placeholder="Nome da Categoria"
          {...register("name")}
          defaultValue={category ? category.name : ""}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <div>
          <Button
            text="cancelar"
            variant="cancel"
            onClick={() => {
              setCategory(undefined);
              handleOpenModal();
            }}
            size="small"
          />
          <Button text="enviar" type="submit" size="small" />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CategoryModal;

import { ErrorMessage, ModalOverlay, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import { ModalContainer } from "./styled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useCategories } from "../../contexts/categories";

interface CategoryModalProps {
  handleOpenModal: () => void;
}

interface NewCategoryData {
  name: string;
}

const newCategorySchema = yup.object().shape({
  name: yup.string().required("Nome da categoria obrigatório"),
});

const CategoryModal = ({ handleOpenModal }: CategoryModalProps) => {
  const { handleGetCategories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCategoryData>({
    resolver: yupResolver(newCategorySchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewCategory = (data: NewCategoryData) => {

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

  return (
    <ModalOverlay>
      <ModalContainer onSubmit={handleSubmit(handleNewCategory)}>
        <h2>Criar nova categoria</h2>
        <StyledInput placeholder="Nome da Categoria" {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <div>
          <Button text="cancelar" variant="cancel" onClick={handleOpenModal} size="small"/>
          <Button text="enviar" type="submit" size="small"/>
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CategoryModal;

import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Category } from "../../types";
import { mockedCategories } from "../../mocks/index";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useProducts } from "../../contexts/products";

interface ProductsModalProps {
  handleOpenModal: () => void;
}

interface NewProductData {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId?: string;
}

const newProductSchema = yup.object().shape({
  name: yup.string().required("Nome do Produto obrigatório"),

  description: yup.string().required("Descrição do Produto obrigatória"),

  price: yup
    .number()
    .typeError("Digite o Preço do Produto em números")
    .required("Preço do Produto obrigatório"),

  image: yup
    .string()
    .url("Formato de URL inválido")
    .required("Url da Imagem obrigatória"),
});

const ProductModal = ({ handleOpenModal }: ProductsModalProps) => {
  const { handleGetProducts } = useProducts();

  const [categoryId, setCategoryId] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({ resolver: yupResolver(newProductSchema) });

  const handleNewProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api.post("/products", data, headers).then((res) => {
      toast.success("Produto registrado com sucesso");
      handleGetProducts();
      handleOpenModal();
    }).catch((err)=> toast.error("Selecione uma categoria"));
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer onSubmit={handleSubmit(handleNewProduct)}>
        <h2>Adicionar Produto</h2>
        <StyledInput placeholder="Nome do Produto" {...register("name")} />
        <StyledInput
          placeholder="Descrição do Produto"
          {...register("description")}
        />
        <StyledInput
          step="0.01"
          type="number"
          placeholder="Preço do Produto"
          {...register("price")}
        />
        <StyledInput
          placeholder="Url da Imagem do Produto"
          {...register("image")}
        />
        <S.Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>Selecione a categoria...</option>
          {mockedCategories.map((element) => (
            <option key={element.id} value={element.id}>
              {element.name}
            </option>
          ))}
        </S.Select>
        {
          <ErrorMessage>
            {errors.name?.message ||
              errors.description?.message ||
              errors.price?.message ||
              errors.image?.message}
          </ErrorMessage>
        }
        <div>
          <Button
            onClick={handleOpenModal}
            size="small"
            text="Cancelar"
            variant="cancel"
          />
          <Button size="small" text="Enviar" type="submit" />
        </div>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default ProductModal;

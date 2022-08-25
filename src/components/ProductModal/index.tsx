import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Product } from "../../types";
import { mockedCategories } from "../../mocks/index";
import { api } from "../../services";
import toast from "react-hot-toast";
import { useProducts } from "../../contexts/products";

interface ProductsModalProps {
  handleOpenModal: () => void;
  product?: Product;
}

interface NewProductData {
  name?: string;
  description?: string;
  price?: number;
  image?: string;
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

const updateProductSchema = yup.object().shape({
  name: yup.string().required("Nome do Produto obrigatório"),

  description: yup.string(),

  price: yup.number().typeError("Digite o Preço do Produto em números"),
  image: yup.string().url("Formato de URL inválido"),
});

const ProductModal = ({ handleOpenModal, product }: ProductsModalProps) => {
  const { handleGetProducts } = useProducts();

  const [categoryId, setCategoryId] = useState<string>(
    product ? product.categoryId : ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({
    resolver: yupResolver(product ? updateProductSchema : newProductSchema),
  });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api
      .post("/products", data, headers)
      .then((res) => {
        toast.success("Produto registrado com sucesso");
        handleGetProducts();
        handleOpenModal();
      })
      .catch((err) => toast.error("Selecione uma categoria"));
  };

  const handleUpdateProduct = (data: NewProductData) => {
    data.categoryId = categoryId;

    api.patch(`/products/${product?.id}`, data, headers).then(() => {
      toast.success("Produto atualizado com sucesso");
      handleGetProducts();
      handleOpenModal();
    });
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer
        onSubmit={
          product
            ? handleSubmit(handleUpdateProduct)
            : handleSubmit(handleNewProduct)
        }
      >
        <h2>{product ? "Editar Produto" : "Adicionar Produto"}</h2>
        <StyledInput
          defaultValue={product ? product.name : ""}
          placeholder="Nome do Produto"
          {...register("name")}
        />
        <StyledInput
          defaultValue={product ? product.description : ""}
          placeholder="Descrição do Produto"
          {...register("description")}
        />
        <StyledInput
          defaultValue={product ? product.price : ""}
          step="0.01"
          type="number"
          placeholder="Preço do Produto"
          {...register("price")}
        />
        <StyledInput
          defaultValue={product ? product.image : ""}
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

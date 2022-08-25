import { ErrorMessage, StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ProductsModalProps {
  handleOpenModal: () => void;
}

interface NewProductData {
  name: string;
  description: string;
  price: number;
  image: string;
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProductData>({ resolver: yupResolver(newProductSchema) });

  const handleNewProduct = (data: NewProductData) => {};

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
          type="number"
          placeholder="Preço do Produto"
          {...register("price")}
        />
        <StyledInput
          placeholder="Url da Imagem do Produto"
          {...register("image")}
        />
        <StyledInput placeholder="Categoria do Produto" />
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

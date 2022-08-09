import { Product } from "../../types";
import * as S from "./styles";
import { useState } from "react";
import toast from "react-hot-toast";
import { TrashIcon } from "../../assets/icons";
import Input from "../Input";

interface CheckoutCardProps {
  product: Product;
}

const CheckoutCard = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  return (
    <S.CheckoutCardContainer>
      <S.CheckoutCardHeader>
        <img src={product.image} alt={product.name} />
        <div>
          <h5 title={product.name}>{product.name}</h5>
          <p>R${product.price}</p>
        </div>
        <S.ProductQuantityInput
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <span>R${(quantity * product.price).toFixed(2)}</span>
      </S.CheckoutCardHeader>
      <S.ChckoutCardFooter>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)} placeholder="Detalhes do produto"        />
        <S.RemoveProductButton
          onClick={() => toast.error("Sessão em desenvolvimento!")}
        >
          <TrashIcon/>
        </S.RemoveProductButton>
      </S.ChckoutCardFooter>
    </S.CheckoutCardContainer>
  );
};

export default CheckoutCard;

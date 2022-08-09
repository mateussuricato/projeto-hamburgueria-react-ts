import toast from "react-hot-toast";
import Button from "../Button";
import CheckoutCard from "../CheckoutCard";
import * as S from "./styles";
import { mockedProducts } from "../../mocks";

const OrderDetails = () => {
  return (
    <S.OrderDetailsContainer>
      <S.OrderDetailsHeader>
        <h2>Pedido 12</h2>
        <div>
          <Button text="Comer no local" onClick={() => {}} size="small" />
          <Button
            text="P/ Viagem"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
          <Button
            text="Delivery"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
        </div>
      </S.OrderDetailsHeader>
      <S.CheckoutDetailsContainer>
        <S.CheckoutDetailsHeader>
          <div>
            <h3>Item</h3>
            <h3>Qtd</h3>
          </div>
          <h3>Preço</h3>
        </S.CheckoutDetailsHeader>
        <S.CheckoutCardsContainer>
          <CheckoutCard product={mockedProducts[0]}/>
          <CheckoutCard product={mockedProducts[1]}/>
        </S.CheckoutCardsContainer>
      </S.CheckoutDetailsContainer>
      <S.OrderDetailsFooter>
        <div>
          <p>Desconto</p>
          <h3>R$0,00</h3>
        </div>
        <div>
          <p>Sub Total</p>
          <h3>R$0,00</h3>
        </div>
        <Button
          text="Continuar para o pagamento"
          onClick={() => toast.error("Sessão em desenvolvimento!")}
          size="x-large"
        />
      </S.OrderDetailsFooter>
    </S.OrderDetailsContainer>
  );
};

export default OrderDetails;

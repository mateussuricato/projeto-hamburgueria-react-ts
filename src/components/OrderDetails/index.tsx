import Button from "../Button";
import * as S from "./styles";

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
          <h3>Item</h3>
          <h3>Qtd</h3>
          <h3>Preço</h3>
        </S.CheckoutDetailsHeader>
        <div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
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
          onClick={() => {}}
          size="large"
        />
      </S.OrderDetailsFooter>
    </S.OrderDetailsContainer>
  );
};

export default OrderDetails;

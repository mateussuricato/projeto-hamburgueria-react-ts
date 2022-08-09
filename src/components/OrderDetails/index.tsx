import * as S from "./styles";

const OrderDetails = () => {
  return (
    <S.OrderDetailsContainer>
      <S.OrderDetailsHeader>
        <h2>Pedido 12</h2>
        <div>
          <button>Comer no Local</button>
          <button>P/ Viagem</button>
          <button>Delivery</button>
        </div>
        </S.OrderDetailsHeader>
      <div>
        <div>
          <h3>Item</h3>
          <h3>Qtd</h3>
          <h3>Preço</h3>
        </div>
        <div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
      </div>
      <div>
        <div>
          <p>Desconto</p>
          <p>R$0,00</p>
        </div>
        <div>
          <p>Sub Total</p>
          <p>R$0,00</p>
        </div>
        <button>Continuar para o pagamento</button>
      </div>
      </S.OrderDetailsContainer>
  );
};

export default OrderDetails;

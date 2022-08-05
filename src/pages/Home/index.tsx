const Home = () => {
  return (
    <div>
      <div>
        <img src="" alt="logo" />
        <img src="" alt="home" />
        <img src="" alt="settings" />
        <img src="" alt="logout" />
      </div>
      <div>
        <header>
          <div>
            <h1>Bruger Fresh</h1>
            <p>{new Date(Date.now()).toLocaleString()}</p>
          </div>
          <div>
            <img src="" alt="search-icon" />
            <input type="text" />
          </div>
        </header>
        <section>
          <div>
            <p>Lanches</p>
          </div>
          <div>
            <h2>Escolha seu lanche</h2>
            <select>
              <option value="1">1</option>
            </select>
          </div>
          <div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
            <div>card</div>
          </div>
        </section>
      </div>
      <aside>
        <header>
          <h2>Pedido 12</h2>
          <div>
            <button>Comer no Local</button>
            <button>P/ Viagem</button>
            <button>Delivery</button>
          </div>
        </header>
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
      </aside>
    </div>
  );
};

export default Home;
